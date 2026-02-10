import { useState } from 'react'

export default function NotepadContent() {
  const [text, setText] = useState(`Welcome to Notepad!

This is a retro-style text editor. Feel free to type anything you want here.

Some fun things to try:
- Write some notes
- Create a to-do list
- Draft an email
- Write some poetry

This text will be lost when you close the window (just like the real thing!)

---
Type away...`)

  return (
    <div className="h-full flex flex-col bg-white">
      <textarea
        className="flex-1 p-4 font-retro text-sm resize-none border-none outline-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
        spellCheck={false}
      />
      <div className="bg-win95-gray win95-border px-2 py-1 text-xs flex justify-between">
        <span>Line 1, Col 1</span>
        <span>{text.length} characters</span>
      </div>
    </div>
  )
}
