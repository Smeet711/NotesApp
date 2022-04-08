

const Note = ({ id, text, date,handleDeleteNote,handleEditNote }) => {
	return (
		<div className='note' key={id}>
			<span>{text}</span>
			<div className='note-footer' key={id}>
				<small>{date}</small>
				{/* <i className="far fa-edit add-btn" onClick={()=>handleEditNote(id)}></i>  */}
				<i className="far fa-trash-alt add-btn" onClick={()=>handleDeleteNote(id)}></i>
			</div>
		</div>
	);
};

export default Note;
