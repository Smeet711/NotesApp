import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [editItem, seteditItem] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();

    if (!notes) {
      alert("Please Enter Keep");
    } else if (notes) {
      setNotes(
        notes.map((curElem) => {
          if (curElem.id === editItem) {
            return { ...curElem, text: notes };
          }
          return curElem;
        })
      );
    }

    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const handleDeleteNote = (index) => {
    console.log("delete");

    const updatedNotes = notes.filter((curElem) => {
      return curElem.id !== index;
    });

    setNotes(updatedNotes);
  };

  const handleEditNote = (index) => {
    const note_edit = notes.find((curElem) => {
      return curElem.id === index;
    });
    setNotes(note_edit.text);
    seteditItem(index);
  };

  return (
    <div className="container">
      <Header />
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={handleDeleteNote}
        handleEditNote={handleEditNote}
      />
    </div>
  );
};

export default App;
