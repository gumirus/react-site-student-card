import React, { Component } from "react";

export default class CardStudent extends Component {
  render() {
    return (
      <div className="container mt-5 mr-5">
        <h2>Карточка студента</h2>
        <div>Нет данных</div>
        <button className="btn btn-primary mt-3" type="submit">
          Добавить
        </button>
      </div>
    );
  }
}
