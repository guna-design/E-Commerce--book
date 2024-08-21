import  { useState } from "react";
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";


const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Science",
    "Mistery",
    "Programming",
    "Fantacy",
    "Autobiography",
    "History",
    "Horror",
    "Children Books",
    "Business",
    "Travel",
    "Religion",
    "Art and Design",
    "Memoir",
    "Crime",
    "Classics",
  ];
  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );
  // eslint-disable-next-line no-unused-vars
  const handleChangeSelectedValue = (event) => {
    // console.log(event.target.value);
    setSelectedBookCategory();

    // handle book submit
  };
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

   const category = form.categoryName.value;


    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
 
    }
    // console.log(bookObj);
 
  
  // send data to database

  fetch("http://localhost:5000/upload-book",
    {method:"POST",
      headers:{
        "content-type":"application/json"
      },
      // eslint-disable-next-line no-undef
      body: JSON.stringify(bookObj)
    }
  // eslint-disable-next-line no-unused-vars
  ).then(res=>res.json()).then(data=>{
    // console.log(data)
    alert("Book uploaded successfully")
    form.reset();
  })
}
  //
  return (
    <div className="p-4 sm:ml-64">
      <h2 className="mb-8 text-3xl font-bold">Upload A book</h2>

      <form
        onSubmit={handleBookSubmit}
        className="flex lg:w-[1120px] flex-col flex-wrap gap-4"
      >
        {/* 1st Row */}
        <div className="flex gap-8">
          {/* book */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              placeholder="Book name"
              name="BookTitle"
              required
              type="text"
            />
          </div>
          {/* author */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              placeholder="Author name"
              name="author name"
              required
              type="text"
            />
          </div>
        </div>
        {/* 2nd Row */}
        <div className="flex gap-8">
          {/* img Url */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="Book img Url" value="Book Img URL" />
            </div>
            <TextInput
              id="imageURL"
              placeholder="Book-img-URL"
              name="BookTitle"
              required
              type="text"
            />
          </div>
          {/* Category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              name="categoryName"
              id="inputState"
              className="w-full rounded "
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>
        {/* Book discriptions */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Bookdiscription" value=" Book Discription" />
          </div>
          <Textarea
            id="bookDescription"
            type="text"
            placeholder="Book Discription"
            className="w-full"
            required
            rows={6}
          />
        </div>
        {/* Book Pdf Link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Book Pdf URL" value="Book Pdf URL" />
          </div>
          <TextInput
            id="bookPDFURL"
            placeholder="Book-pdf-URL"
            type="text"
            sizing="sm"
          />
        </div>
        {/* Submit Button */}
        <Button type="submit" className="bg-red-500 justify-center mt-5 ">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
