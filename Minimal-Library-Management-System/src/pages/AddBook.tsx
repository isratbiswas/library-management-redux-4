import React from 'react';

const AddBook = () => {
    return (
        <div className='justify-center'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 shadow-md mt-4">
     <legend className="fieldset-legend text-xl">Add New Book</legend>

  <label className="label">Title</label>
  <input type="text" className="input" placeholder="Enter Book title" required/>
  <label className="label">Author</label>
  <input type="text" className="input" placeholder="Enter author name" />
  <label className="label">Genre</label>
  <input type="text" className="input" placeholder="Genre" />
  <label className="label">ISBN</label>
  <input type="text" className="input" placeholder="Enter ISBN (11 or13 digits)" />
  <label className="label">Description</label>
  <input type="text" className="input" placeholder="Description" />
  <label className="label">Copies</label>
  <input type="text" className="input" placeholder="Copies" />
  <label className="label">Available</label>
  <input type="text" className="input" placeholder="Available" />
</fieldset> 
  <button type='submit'>Add Book</button>

  {/* Open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default AddBook;