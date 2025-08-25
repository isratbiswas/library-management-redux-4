import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs : ClassValue[]){
    return twMerge(clsx(inputs))
}

export function validateISBN(isbn: string):{
    isValid: boolean;
    error?: string
}{
     // Remove all hyphens and spaces
  const cleanISBN = isbn.replace(/[-\s]/g, "");
  if(!/^\d{10}$|^\d{13}$/.test(cleanISBN)){
    if(cleanISBN.length<10){
      return {isValid: false, error: "ISBN must be at least 10 digits"}
    }
     else if(cleanISBN.length >13){
     return { isValid: false, error: "ISBN cannot be more than 13 digits" };
  }
   else {
      return { isValid: false, error: "ISBN must be exactly 10 or 13 digits" };
    }
   
  }
  return {isValid : true}

}

export function isValidISBN(isbn:string) : boolean{
    return validateISBN(isbn).isValid;
}
