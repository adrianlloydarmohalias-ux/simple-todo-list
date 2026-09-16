import { Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function TodoItem({ todo, onDelete }) {
  return (
    <li className="animate-in fade-in slide-in-from-right-2 flex items-center gap-3 rounded-md px-2 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent">
      <span className="flex-1 text-sm">{todo.title}</span>
      <Button
        variant="ghost"
        size="icon"
        className="group"
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete ${todo.title}`}
      >
        <Trash2 className="transition-transform duration-200 group-hover:rotate-12" />
      </Button>
    </li>
  )
}
