# CLAUDE.md

## Tech Stack

- Plain HTML, CSS, and JavaScript only.
- No frameworks, no build step: files open directly in a browser.
- Fonts (Fraunces, Source Sans 3) load from Google Fonts with a `<link>`.

## Project Structure

```
CLAUDE.md          # this file
index.html         # one long scrolling page: one <section> per lesson
css/styles.css     # "Green Leaf" design: colours, fonts, layout, light and dark themes
js/theme.js        # light/dark toggle (light by default)
js/sections.js     # highlights the lesson being read in the contents list
js/tabs.js         # switches between the Lesson and Quiz tabs
js/quiz.js         # the 8-question quiz: instant feedback, score at the end
```

The source slide deck is not stored in the repository.

Update this section whenever files or folders are added.

## Key Requirements

1. Every page must be responsive and work on desktop, tablet and phone.
2. Users can toggle between a light and a dark theme. The default is the
   light theme.

## Feature Plan

### Site structure

One long scrolling page with these sections, top to bottom:

1. **Top bar** (stays visible): course title, table of contents, theme toggle.
2. **Introduction**: what the course covers and who it is for (beginners).
3. **Lessons**: one section per slide (3-5 in total), in slide order.
4. **Key terms**: plain-language meanings of the words used.
5. **Footer**.

How students move around:

- Scroll down to go lesson by lesson.
- Click a table of contents link to jump straight to a lesson.
- The page is read-only: no quizzes, no progress tracking, no uploads.

### Phases

**Phase 1: Course from the slides**
- Ask for the slides (PDF or PowerPoint); don't start building before then.
- Confirm the lesson breakdown, then build the page: HTML, CSS, theme toggle.
- Look: professional / corporate, with a light default and a dark option.

**Phase 2: Check and publish**
- Test on desktop, tablet and phone widths, and in both themes.
- Read the wording for beginners; ask before committing or pushing.

## Rules for Claude

- Explain technical terms in plain language.
- Ask before making big changes (new files or folders, restructuring,
  adding dependencies).
- Ask rather than guess when something is unclear.
