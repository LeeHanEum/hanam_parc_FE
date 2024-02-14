import React from "react";

export default function ImageInput({ key, onDelete }) {
    return (
        <div className="mb-4" key={key}>
            <label className="font-semibold block" htmlFor={`url${key}`}>
                이미지 첨부 :
            </label>
            <input
                id={`url${key}`}
                type="file"
                className="form-input mt-3 w-[400px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
            />
        </div>
    );
}