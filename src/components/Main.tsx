import React from "react";

import Card from "./Card";

function Main() {
  return (
    <main className="page-content">
      <Card
        title="Virtual Piano"
        copy="A simple piano using pure javascript"
        code="https://github.com/rhuangabrielsantos/Virtual-Piano"
        demo="https://rhuangabrielsantos.github.io/Virtual-Piano/"
      />

      <Card
        title="TicTacToe Bot"
        copy="A bot for discord to play tic-tac-toe using library discord-js, node.js and mongodb"
        code="https://github.com/rhuangabrielsantos/tic-tac-toe-discord"
        demo="https://discord.com/oauth2/authorize?client_id=787531206619037736&permissions=522304&scope=bot"
      />

      <Card
        title="Easy List"
        copy="A Simple todo list with react.js and Framer Motion"
        code="https://github.com/rhuangabrielsantos/easy-list"
        demo="https://easy-list.vercel.app/"
      />

      <Card
        title="AwesomePackages"
        copy="An place for awesome things"
        code="https://github.com/awesine-packages"
        demo="https://packagist.org/packages/awesome-packages"
      />
    </main>
  );
}

export default Main;
