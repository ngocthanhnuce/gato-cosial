// @ts-nocheck

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import io from "socket.io-client";
import baseUrl from "../utils/baseUrl";
import { NoPosts } from "../components/Layout/Nodata";
import CreatePost from "../components/Post/CreatePost";
import CardPost from "../components/Post/CardPost";
import { Segment } from "semantic-ui-react";
import { parseCookies } from "nookies";
import NotificationPortal from "../components/Home/NotificationPortal";

function Index(props) {
  const { user, postsData, errorLoading } = props;
  const [posts, setPosts] = useState(postsData);
  const [showToastr, setShowToastr] = useState(false);
  const [pageNumber, setPageNumber] = useState(2);
  const [newNotification, setNewNotification] = useState(null);
  const [notificationPopup, showNotificationPopup] = useState(false);

  const socket = useRef();

  useEffect(() => {
    // if (!socket.current) {
    //   socket.current = io(baseUrl);
    // }
    // if (socket.current) {
    //   socket.current.emit("join", { userId: user._id });
    // }
    document.title = `Welcome ${user.name}`;
    // return () => {
    //   if (socket.current) {
    //     socket.current.emit("disconnect");
    //     socket.current.off();
    //   }
    // };
  }, []);
  useEffect(() => {
    if (socket.current) {
      socket.current.on(
        "newNotificationReceived",
        ({ name, profilePicUrl, username, postId }) => {
          setNewNotification({ name, profilePicUrl, username, postId });

          showNotificationPopup(true);
        }
      );
    }
  }, []);
  if (posts.length === 0 || errorLoading) return <NoPosts />;
  return (
    <>
      {notificationPopup && newNotification !== null && (
        <NotificationPortal
          newNotification={newNotification}
          notificationPopup={notificationPopup}
          showNotificationPopup={showNotificationPopup}
        />
      )}
      <div style={{ marginTop: "15px", marginBottom: "20px" }}>
        <CreatePost user={user} setPosts={setPosts} />
        <Segment>
          {posts?.map((post) => (
            <CardPost
              key={post._id}
              post={post}
              user={user}
              setPosts={setPosts}
              setShowToastr={setShowToastr}
            />
          ))}
        </Segment>
      </div>
    </>
  );
}

Index.getInitialProps = async (ctx) => {
  try {
    const { token } = parseCookies(ctx);

    const res = await axios.get(`${baseUrl}/api/posts`, {
      headers: { Authorization: token },
      params: { pageNumber: 1 },
    });

    return { postsData: res.data };
  } catch (error) {
    return { errorLoading: true };
  }
};

export default Index;
