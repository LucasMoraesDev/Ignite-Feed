import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import { PostProps } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

interface Posts extends PostProps {
  id: number;
}

const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/vanessa.png",
      name: "Janne Cooper",
      role: "Dev Front-End",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
      { type: "hashtag", content: "#novoprojeto" },
      { type: "hashtag", content: "#nlw" },
      { type: "hashtag", content: "#rocketseat" },
    ],
    publishedAt: new Date("2022-11-01 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/marco.png",
      name: "Devon Lane",
      role: "Dev Front-End",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👋" },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
      },
      { type: "link", content: "👉 devonlane.design" },
      { type: "hashtag", content: "#uiux " },
      { type: "hashtag", content: "#userexperience" },
    ],
    publishedAt: new Date("2022-10-30 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
