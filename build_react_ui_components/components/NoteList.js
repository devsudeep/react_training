import NoteCard from "../components/NoteCard"
import notes from "../data/notes.json";
import { useEffect, useState } from "react";
function NodeList() {
    const [notesData, setNotesData] = useState();
    const [notesDataError, setNotesDataError] = useState();

    useEffect(() => {
        async function getData() {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            try {
                setNotesData(notes)
            } catch (error) {
                setNotesDataError(error);
            }
        }

        getData();
    });

    if (notesDataError) {
        return <div> error: {notesDataError}</div>
    }
    // const notesData = [
    //     {
    //       id: "1",
    //       title: "Get Hotel",
    //       description: "Prefer Best Westerns",
    //       createDate: "2021-07-11T13:32:10.000Z",
    //     },
    //     {
    //       id: "2",
    //       title: "Fill Care With Gas",
    //       description: "Make sure to get Shell",
    //       createDate: "2021-07-11T13:31:34.000Z",
    //     },
    //     {
    //       id: "3",
    //       title: "Pack Bathing Suit",
    //       description: "Make sure to bring extra bathing suite",
    //       createDate: "2021-07-11T13:33:07.000Z",
    //     },
    //   ];
    if (!notesData) {
        return <div>Loading...</div>
    }
    function sortByDate(a, b) {
        const dateA = a.createDate;
        const dateB = b.createDate;
        return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
    }
    return (
        <div className="row tab-content bg-transparent note-has-grid">
            {notesData.sort(sortByDate).map((note) => {
                return <NoteCard note={note} key={note.id} />;
            })}
        </div>
    );
}

export default NodeList;