import React, { useEffect, useState } from "react";
import service from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  const imgUrl = featuredImage ? service.getFilePreview(featuredImage) : null;
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full flex justify-center mb-4">
          {imgUrl ? (
            <img src={imgUrl} alt={title} className="rounded-xl" />
          ) : (
            <div className="h-48 w-full bg-gray-200 rounded-xl" />
          )}
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
