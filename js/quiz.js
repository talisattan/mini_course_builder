// Eight multiple-choice questions. Each answer is marked as soon as it is
// chosen and then locked; the score appears once all eight are answered.
(function () {
  var questions = [
    {
      q: 'Why is the last mile considered the most carbon-intensive part of the supply chain per parcel delivered?',
      options: [
        'Last-mile delivery routes are always longer than long-haul routes',
        'Last-mile vehicles use older, less efficient engines than long-haul trucks',
        'Low vehicle utilisation, frequent stops, congestion and failed redeliveries combine to produce high emissions per parcel',
        'Electric vehicles are not yet available for last-mile delivery'
      ],
      answer: 2,
      why: 'Partly full vans, many stops, traffic and repeat deliveries all add emissions for each parcel.'
    },
    {
      q: 'Roughly how much CO2 does a diesel delivery van produce per kilometre driven?',
      options: ['18 to 22 grams', '180 to 220 grams', '1,800 to 2,200 grams', 'None, because only electric vans produce CO2'],
      answer: 1,
      why: 'A diesel van produces about 180 to 220 grams per kilometre. An electric van has no tailpipe emissions.'
    },
    {
      q: 'What are the main financial barriers to switching to electric vans?',
      options: [
        'Electric vans cost more to run than diesel vans',
        'Electric vans need much more maintenance',
        'A higher purchase price and the cost of installing charging equipment at depots',
        'Electricity costs more per kilometre than diesel'
      ],
      answer: 2,
      why: 'Electric vans are typically 30 to 50 percent more expensive to buy, but they are cheaper to run and maintain.'
    },
    {
      q: 'Which of these reduces the total kilometres driven, whatever powers the vehicle?',
      options: ['Route optimisation', 'Replacing diesel vans with electric vans', 'Carbon offset programmes', 'Eco-packaging'],
      answer: 0,
      why: 'Planning more efficient routes cuts distance driven. Electric vans lower the emissions of each kilometre instead.'
    },
    {
      q: 'By how much could consolidating deliveries reduce vehicle trips to a housing estate?',
      options: ['5 to 10 percent', '20 to 30 percent', '60 to 80 percent', 'By 100 percent'],
      answer: 2,
      why: 'Sharing vehicles across carriers could cut trips by 60 to 80 percent, with less congestion and parking pressure too.'
    },
    {
      q: 'What does the Commercial Vehicle Emissions Scheme do?',
      options: [
        'It gives companies financial incentives to retire older, more polluting vehicles and replace them with cleaner ones',
        'It builds parcel lockers across Singapore',
        'It funds route optimisation software for logistics companies',
        'It stops customers from choosing same-day delivery'
      ],
      answer: 0,
      why: 'The scheme is a financial incentive for cleaner commercial vehicles. Funding for technology comes from the Logistics Industry Transformation Map.'
    },
    {
      q: 'What would be a more impactful change on e-commerce platforms than carbon offsets and eco-packaging?',
      options: [
        'Removing all delivery fees',
        'Showing customers the true environmental cost of each delivery option at the point of purchase',
        'Offering only same-day delivery',
        'Making returns free'
      ],
      answer: 1,
      why: 'Clear information lets customers choose more sustainable options, which offsets and packaging alone have not done.'
    },
    {
      q: 'What does a truly sustainable last-mile delivery system need?',
      options: [
        'One new technology, such as electric vans',
        'One new policy, such as a national emissions target',
        'Change at vehicle, operational, infrastructure, policy and consumer levels at the same time',
        'Customers to stop ordering online'
      ],
      answer: 2,
      why: 'No single lever is enough on its own; they work together.'
    }
  ];

  var quiz = document.getElementById('quiz');
  var score = document.getElementById('score');
  var answered, correct;

  function build() {
    quiz.innerHTML = '';
    score.innerHTML = '';
    answered = 0;
    correct = 0;

    questions.forEach(function (item, qi) {
      var box = document.createElement('fieldset');
      box.className = 'question';

      var legend = document.createElement('legend');
      legend.textContent = (qi + 1) + '. ' + item.q;
      box.appendChild(legend);

      var feedback = document.createElement('p');
      feedback.className = 'feedback';
      feedback.setAttribute('aria-live', 'polite');

      item.options.forEach(function (text, oi) {
        var label = document.createElement('label');
        label.className = 'option';
        var input = document.createElement('input');
        input.type = 'radio';
        input.name = 'q' + qi;
        input.addEventListener('change', function () {
          choose(box, feedback, item, oi);
        });
        label.appendChild(input);
        label.appendChild(document.createTextNode(' ' + text));
        box.appendChild(label);
      });

      box.appendChild(feedback);
      quiz.appendChild(box);
    });
  }

  function choose(box, feedback, item, picked) {
    var labels = box.querySelectorAll('.option');
    box.querySelectorAll('input').forEach(function (input) { input.disabled = true; });

    labels[item.answer].classList.add('is-correct');
    if (picked === item.answer) {
      correct++;
      feedback.textContent = '✓ Correct. ' + item.why;
    } else {
      labels[picked].classList.add('is-wrong');
      feedback.textContent = '✗ Not quite. The correct answer is highlighted. ' + item.why;
    }

    answered++;
    if (answered === questions.length) showScore();
  }

  function showScore() {
    score.innerHTML = '';
    var result = document.createElement('p');
    result.className = 'score';
    result.textContent = 'Your score: ' + correct + ' out of ' + questions.length + '.';
    var again = document.createElement('button');
    again.type = 'button';
    again.textContent = 'Try again';
    again.addEventListener('click', function () {
      build();
      window.scrollTo(0, 0);
    });
    score.appendChild(result);
    score.appendChild(again);
  }

  build();
})();
