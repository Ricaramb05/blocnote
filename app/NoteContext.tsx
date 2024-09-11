import React, { createContext, useState, ReactNode, useContext } from 'react';

interface Note {
    title: string;
    content: string;
}

interface NoteContextType {
    notes: Note[];
    addNote: (note: Note) => void;
}

const NoteContext = createContext<NoteContextType | undefined>(undefined);

export const NoteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [notes, setNotes] = useState<Note[]>([]);

    const addNote = (note: Note) => {
        setNotes(prevNotes => [...prevNotes, note]);
    };

    return (
        <NoteContext.Provider value={{ notes, addNote }}>
            {children}
        </NoteContext.Provider>
    );
};

export const useNotes = (): NoteContextType => {
    const context = useContext(NoteContext);
    if (!context) {
        throw new Error('useNotes must be used within a NoteProvider');
    }
    return context;
};
