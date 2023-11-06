import React from "react";

export function Article({ title }) {
  return (
    <article>
      <h3 className="">{title}</h3>
      <div id="icon-temperature"></div>
      <p id={title} className="text"></p>
    </article>
  );
}
