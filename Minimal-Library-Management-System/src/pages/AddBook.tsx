/* eslint-disable @typescript-eslint/no-explicit-any */
import  { Genre } from '@/interfaces/types';
import { useCreateBookMutation } from '@/redux/api/baseApi';
import { createBookSchema } from "@/zod";
import type { createBookFormData } from "@/zod";
import { toast } from "sonner";
import { z } from "zod";
import  { useState } from 'react';
import { Copy } from 'lucide-react';

const AddBook = () => {
  const [createBook, {isLoading}] = useCreateBookMutation();
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
 const [formData, setFormData]= useState<createBookFormData>({
    title: "",
    author: "",
    genre: Genre.FICTION,
    isbn: "",
    description: "",
    copies: 1,
    available: true,
 });

 const validateField = (
  field: keyof createBookFormData,
  value: string | number | boolean
 ) =>{
  try {
    const fieldSchema = createBookSchema.shape[field];
    fieldSchema.parse(value);
    setFieldErrors((prev) => ({...prev,[field]: ""}));
    return true;
  }
  catch(error){
     if(error instanceof z.ZodError){
     console.log(error);
      // const fieldError = error.errors.find((e) => e.path.includes(field));
      //   if (fieldError) {
      //     setFieldErrors((prev) => ({ ...prev, [field]: fieldError.message }));
      //   }
     }
     return false;
  }
 }

 const handleFieldChange = (
    field: keyof createBookFormData,
    value: string | number | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    validateField(field, value);
  };
  
 const handleSubmit = async (e:any) => {
    e.preventDefault();
    setFieldErrors({});

    try {
      // Validate entire form
      const validatedData = createBookSchema.parse(formData);

      try {
        console.log("Sending book data:", validatedData);
        const result = await createBook(validatedData).unwrap();
        console.log("Book created successfully:", result);

        // Success toast
        toast.success("Book added successfully!", {
          description: `${validatedData.title} by ${validatedData.author} has been added to the library.`,
          duration: 4000,
        });
          setFormData({
          title: "",
          author: "",
          genre: Genre.FICTION,
          isbn: "",
          description: "",
          copies: 1,
          available: true,
        });

      } catch (error) {
        console.error("Failed to create book:", error);
        if (error instanceof Error && error.message === "PARSING_ERROR") {
          toast.error("Validation failed", {
            description: "Isbn is already exists or not valid.",
            duration: 5000,
          });
        } else {
          toast.error("Failed to add book", {
            description:
              "An error occurred while adding the book. Please try again.",
            duration: 5000,
          });
        }
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Validation errors
        const errors: Record<string, string> = {};
        setFieldErrors(errors);

        toast.error("Validation failed", {
          description: "Please check the form fields and try again.",
          duration: 5000,
        });
      }
    }
  };


    return (
        <div className='flex items-center justify-center mt-16'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 shadow-md mt-4">
       <legend className="fieldset-legend text-xl">Add New Book</legend>

      <form onSubmit={handleSubmit}>
         <label className="label mt-4 text-base font-semibold">Title *</label>
  <input type="text" name="title" className="input mt-4 text-base font-semibold" required value={formData.title} 
     onChange={(e)=>handleFieldChange("title", e.target.value)}
  placeholder="Enter Book title"  disabled={isLoading} />
  {fieldErrors.title &&  <p className="border-red-300 focus-visible:ring-red-500">{fieldErrors.title}</p>}
  <label className="label mt-4 text-base font-semibold">Author</label>
  <input type="text" name="author" className="input mt-4 text-base font-semibold" placeholder="Enter author name"  required value={formData.author} onChange={(e) => handleFieldChange("author", e.target.value)}   disabled={isLoading}/>
   {fieldErrors.author && (<p className="text-xs text-red-600 mt-1">{fieldErrors.author}
  </p>
                )}

    <label className="label mt-2 text-base font-semibold">Genre</label>
  <select name="genre" className="select mt-4 text-base font-semibold"
                  value={formData.genre}
                 onChange={(e) => handleFieldChange("genre", e.target.value as Genre)}
                  disabled={isLoading} >
                      {Object.values(Genre).map((g) => (
    <option key={g} value={g}>
      {g}
    </option>
  ))}
</select>
  
  <label className="label">ISBN</label>
  <input type="text" className="input mt-4 text-base font-semibold" placeholder="Enter ISBN (11 or13 digits)"  name="isbn" required value={formData.isbn} onChange={(e) => handleFieldChange("isbn", e.target.value)}   disabled={isLoading}/>
  {fieldErrors.isbn && (
                  <p className="text-xs text-red-600 mt-1">
                    {fieldErrors.isbn}
                  </p>
                )}
  <label className="label">Description</label>
        <textarea
                  name="description"
                  required
                  value={formData.description}
                  onChange={(e) =>
                    handleFieldChange("description", e.target.value)
                  }
                  className='border border-gray-300 w-full mt-4 text-base font-semibold'
                  placeholder="Enter book description"
                  disabled={isLoading}
                />
      
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                  <Copy className="h-4 w-4 mr-2 mt-3 text-gray-500" />
                  Number of Copies *
                </label>
                <input
                  type="number"
                  name="copies"
                  required
                  min={1}
                  max={100}
                  value={formData.copies}
                  onChange={(e) =>
                    handleFieldChange("copies", parseInt(e.target.value) || 1)
                  }
                  className="border border- border-gray-300 w-full py-2 text-xl "
                  placeholder="Enter number of copies"
                  disabled={isLoading}
                />
                {fieldErrors.copies && (
                  <p className="text-xs text-red-600 mt-1">
                    {fieldErrors.copies}
                  </p>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Maximum 100 copies allowed
                </p>
             

    <button type='submit'className='btn btn-primary m-6' >Add Book</button>
      </form>
  </fieldset> 
  
   </div>
    );
};

export default AddBook;