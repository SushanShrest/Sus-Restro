import { Button, Rate, Radio, Select } from "antd";
import type { RadioChangeEvent } from "antd";
import React, { type Dispatch, type SetStateAction } from "react";
import { Config } from "../../../../Config";

interface FormDataProps {
  id: string;
  setId: (num: string) => void; //for useState we declare type like this option 1
  title: string;
  setTitle: Dispatch<SetStateAction<string>>; // option 2(any)
  price: number;
  setPrice: Dispatch<SetStateAction<number>>;
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
  category: string;
  setCategory: Dispatch<SetStateAction<any>>;
  todaySpecial: boolean;
  setTodaySpecial: Dispatch<SetStateAction<boolean>>;
  image: string;
  setImage: Dispatch<SetStateAction<string>>;
}

type ErrorsType = {
  title?: string | null;
  price?: string | null;
  category?: string | null;
  rating?: string | null;
  image?: string | null;
};

interface CreateMenuProps {
  formData: FormDataProps;
  handleOk: () => void;
  fetchMenu: () => void;
  errors: ErrorsType;
  setErrors: Dispatch<SetStateAction<ErrorsType>>;
}

const CreateMenu: React.FC<CreateMenuProps> = ({
  formData,
  handleOk,
  fetchMenu,
  errors,
  setErrors,
}) => {
  const {
    id,
    setId,
    title,
    setTitle,
    price,
    setPrice,
    rating,
    setRating,
    category,
    setCategory,
    todaySpecial,
    setTodaySpecial,
    image,
    setImage,
  } = formData;

  const menu = {
    id,
    title,
    price,
    rating,
    category,
    todaySpecial,
    image,
  };
  const categories = ["veg", "non-veg", "starter", "meat", "drinks", "dessert"];

  const onChange = (e: RadioChangeEvent) => {
    setTodaySpecial(e.target.value);
  };

  const validateField = (fieldName: string, value: any) => {
    switch (fieldName) {
      case "title":
        if (!value || value.trim() === "") return "Title is required";
        return null;

      case "price":
        if (value === undefined || value === null || value <= 0)
          return "Price must be greater than 0";
        return null;

      case "category":
        if (!value) return "Please select a category";
        return null;

      case "rating":
        if (value === 0 || value === undefined) return "Please give a rating";
        return null;

      case "image":
        if (!value || value.trim() === "") return "Image URL is required";
        return null;

      default:
        return null;
    }
  };

  const validateAllFields = () => {
    const newErrors = {
      title: validateField("title", title),
      price: validateField("price", price),
      category: validateField("category", category),
      rating: validateField("rating", rating),
      image: validateField("image", image),
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((err) => err === null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateAllFields()) {
      return;
    }
    try {
      const res = await fetch(`${Config.BASE_URL}/menu`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(menu),
      });
      if (!res.ok) throw new Error("Failed to save menu");
      // reset fields
      setId("");
      setTitle("");
      setPrice(0);
      setRating(0);
      setCategory(null);
      setTodaySpecial(false);
      setImage("");
      // Only now close modal and refresh table
      handleOk();
      fetchMenu();
      alert("Menu Saved");
      setErrors({});
    } catch (err: any) {
      console.log(err.message);
    }
  };
  const clearError = (fieldName: string) => {
    setErrors((prev) => ({
      ...prev,
      [fieldName]: null,
    }));
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {/* ID and Title (stacked) */}
      <div className="flex flex-col" hidden>
        <label htmlFor="id" className="mb-1 font-medium text-gray-700">
          ID:
        </label>
        <input
          type="number"
          id="id"
          name="id"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
          className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="title" className="mb-1 font-medium text-gray-700">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            clearError("title");
          }}
          className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.title && (
          <span className="text-red-500 text-sm">{errors.title}</span>
        )}
      </div>

      <div className="flex flex-col md:flex-row md:gap-4">
        <div className="flex-1 flex flex-col">
          <label htmlFor="price" className="mb-1 font-medium text-gray-700">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => {
              setPrice(Number(e.target.value));
              clearError("price");
            }}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.price && (
            <span className="text-red-500 text-sm">{errors.price}</span>
          )}
        </div>

        <div className="flex-1 flex flex-col mt-4 md:mt-0">
          <label htmlFor="rating" className="mb-1 font-medium text-gray-700">
            Rating:
          </label>
          <Rate
            id="rating"
            value={rating}
            onChange={(value) => {
              setRating(value);
              clearError("rating");
            }}
          />
          {errors.rating && (
            <span className="text-red-500 text-sm">{errors.rating}</span>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:gap-4">
        <div className="flex-1 flex flex-col">
          <label htmlFor="category" className="mb-1 font-medium text-gray-700">
            Category:
          </label>
          <Select
            id="category"
            placeholder="Select Category"
            value={category}
            onChange={(value) => {
              setCategory(value);
              clearError("category");
            }}
          >
            {categories.map((cat) => (
              <Select.Option key={cat} value={cat}>
                {cat}
              </Select.Option>
            ))}
          </Select>
          {errors.category && (
            <span className="text-red-500 text-sm">{errors.category}</span>
          )}
        </div>

        <div className="flex-1 flex flex-col mt-4 md:mt-0">
          <label
            htmlFor="todaySpecial"
            className="mb-1 font-medium text-gray-700"
          >
            Today Special:
          </label>
          <Radio.Group
            onChange={onChange}
            value={todaySpecial}
            options={[
              { value: true, label: "Yes" },
              { value: false, label: "No" },
            ]}
          />
        </div>
      </div>

      {/* Image */}
      <div className="flex flex-col">
        <label htmlFor="image" className="mb-1 font-medium text-gray-700">
          Image URL:
        </label>
        <input
          type="text"
          id="image"
          name="image"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
            clearError("image");
          }}
          className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.image && (
          <span className="text-red-500 text-sm">{errors.image}</span>
        )}
      </div>

      <Button
        type="primary"
        htmlType="submit"
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700"
      >
        Submit
      </Button>
    </form>
  );
};

export default CreateMenu;
