'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import { Toggle } from '@/components/ui/toggle';
import { Bold, Italic, List, ListOrdered } from 'lucide-react';
import { useEffect } from 'react';

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
}

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-blue-500 underline',
                },
            }),
        ],
        content: value,
        editorProps: {
            attributes: {
                class: 'min-h-[200px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            },
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        immediatelyRender: false,
    });

    // Sync content if value changes externally (and editor is not focused? or careful about loops)
    // For this simple case, we probably only need initial content, but let's be careful.
    // If we type, onChange updates value. If we set value, useEffect updates editor. 
    // This can cause cursor jumps. Usually better to only set initial content or handle this conditionally.
    // For now, let's assume uncontrolled or just initial load:
    /* 
    useEffect(() => {
        if (editor && editor.getHTML() !== value) {
            editor.commands.setContent(value);
        }
    }, [value, editor]); 
    */
    // Re-enabling the above causes cursor jumps on every keystroke if parent state updates. 
    // Since we are driving state from this component up, we can likely skip the useEffect for sync 
    // UNLESS we want to clear the form. 
    // To support "clear form", we can expose a ref or check for empty string.

    useEffect(() => {
        if (editor && value === '' && editor.getHTML() !== '<p></p>') {
            editor.commands.setContent('');
        }
    }, [value, editor]);


    if (!editor) {
        return null;
    }

    return (
        <div className="space-y-2">
            <div className="flex items-center gap-1 border p-1 rounded-md bg-muted/20">
                <Toggle
                    size="sm"
                    pressed={editor.isActive('bold')}
                    onPressedChange={() => editor.chain().focus().toggleBold().run()}
                    aria-label="Toggle bold"
                >
                    <Bold className="h-4 w-4" />
                </Toggle>
                <Toggle
                    size="sm"
                    pressed={editor.isActive('italic')}
                    onPressedChange={() => editor.chain().focus().toggleItalic().run()}
                    aria-label="Toggle italic"
                >
                    <Italic className="h-4 w-4" />
                </Toggle>
                <div className="w-px h-4 bg-border mx-1" />
                <Toggle
                    size="sm"
                    pressed={editor.isActive('bulletList')}
                    onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
                    aria-label="Toggle bullet list"
                >
                    <List className="h-4 w-4" />
                </Toggle>
                <Toggle
                    size="sm"
                    pressed={editor.isActive('orderedList')}
                    onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
                    aria-label="Toggle ordered list"
                >
                    <ListOrdered className="h-4 w-4" />
                </Toggle>
            </div>
            <EditorContent editor={editor} />
        </div>
    );
}
