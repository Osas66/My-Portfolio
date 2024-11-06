import React from "react";
import {
  Apollo,
  Calendly,
  Canva,
  ChatGpt,
  Gemini,
  Microsoft,
  Notion,
  Slack,
  Zoom,
} from "../icons";

function Tools() {
  return (
    <div className="tools">
      <Calendly />
      <Slack />
      <Microsoft />
      <ChatGpt />
      <Zoom />
      <Gemini />
      <Canva />
      <Notion />
      <Apollo />
    </div>
  );
}

export default Tools;
