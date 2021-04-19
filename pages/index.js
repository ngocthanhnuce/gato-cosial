// @ts-nocheck
import React, { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import { NoPosts } from "../components/Layout/Nodata";
import CreatePost from "../components/Post/CreatePost";
import CardPost from "../components/Post/CardPost";
import { Segment } from "semantic-ui-react";
import { parseCookies } from "nookies";

function Index(props) {
  const { user, postsData, errorLoading } = props;
  const [posts, setPosts] = useState(postsData);
  const [showToastr, setShowToastr] = useState(false);

  useEffect(() => {
    document.title = `Welcome ${user.name.split("")[0]}`;
  }, []);
  if (posts.length === 0 || errorLoading) return <NoPosts />;
  return (
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
