"use client";
import Image from "next/image";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import config from "@/config"; // Import the config for baseURL

type Props = {
  id: string;
  title: string;
  body: string;
};

export const Articles: React.FC<Props> = ({ id, title, body }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editBody, setEditBody] = useState(body);
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const url = `${config.baseURL}/api/posts/${id}`;
      await axios.delete(url);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articleList"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async () => {
      const url = `${config.baseURL}/api/posts/${id}`;
      await axios.put(url, {
        title: editTitle,
        body: editBody,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articleList"] });
      setIsEditing(false);
    },
  });

  return (
    <div className="bg-white flex items-center justify-center rounded-lg shadow-md font-roboto">
      <div className="flex flex-col pl-6 p-4 w-full">
        {isEditing ? (
          <>
            <input
              className="text-sm font-bold p-2 border border-gray-300 rounded-lg w-full mb-2"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder="Edit title"
            />
            <textarea
              className="text-sm font-normal py-2 p-2 border border-gray-300 rounded-lg w-full mb-2"
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
              placeholder="Edit body"
              rows={4}
            />
            <div className="flex justify-end pt-2 space-x-2">
              <button
                className="text-xs text-green-500"
                onClick={() => updateMutation.mutate()}
              >
                Save
              </button>
              <button
                className="text-xs text-red-500 ml-2 pr-5"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className="flex flex-row pb-4 text-sm font-bold self-end">
              {title.toUpperCase()}
            </h3>
            <Image
              quality={100}
              width={600}
              height={160}
              src="/images/post.png"
              alt="Article Image"
            ></Image>
            <p className="text-sm font-normal py-2 text-left">{body}</p>
            <div className="flex justify-start pt-2">
              <div className="hidden md:flex space-x-4">
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-sm font-semibold text-green-500 pl-3"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteMutation.mutate()}
                  className="text-sm font-semibold text-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};