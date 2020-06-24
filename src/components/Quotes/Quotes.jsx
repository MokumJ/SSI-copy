import React, { useState } from "react"
import { css } from "emotion"

const Quote = () => {
  const quotes = {
    0: {
      client: "Awesome client, Acme Co.",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget erat auctor, faucibus ante ac, convallis metus. Nunc facilisis varius semper. Nullam ut augue eu ipsum rhoncus suscipit in ac diam. Vivamus mattis est justo, in congue nunc rutrum eu. Nullam non elit ultrices, mollis ipsum ut, lobortis quam. Vestibulum auctor erat eu ligula tincidunt, a molestie erat mattis. Nam congue placerat dui, at congue nisl eleifend id. Cras quis odio ornare, tristique diam eu, egestas nisi. Ut pulvinar mattis quam quis blandit. Nunc accumsan efficitur enim, non elementum turpis consectetur a. Mauris nec mi non lacus mattis feugiat ac eget nisi. Aenean accumsan diam vitae auctor consectetur. Ut et enim scelerisque, volutpat erat eget, ornare diam. Sed vel ultrices tortor. Sed mattis sed felis vitae tristique. Aliquam venenatis nulla ante, ut finibus nibh dignissim at.",
    },
    1: {
      client: "Sweet Client, Acme Inc.",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget erat auctor, faucibus ante ac, convallis metus. Nunc facilisis varius semper. Nullam ut augue eu ipsum rhoncus suscipit in ac diam. Vivamus mattis est justo, in congue nunc rutrum eu. Nullam non elit ultrices, mollis ipsum ut, lobortis quam. Vestibulum auctor erat eu ligula tincidunt, a molestie erat mattis. Nam congue placerat dui, at congue nisl eleifend id. Cras quis odio ornare, tristique diam eu, egestas nisi. Ut pulvinar mattis quam quis blandit. Nunc accumsan efficitur enim, non elementum turpis consectetur a. Mauris nec mi non lacus mattis feugiat ac eget nisi. Aenean accumsan diam vitae auctor consectetur. Ut et enim scelerisque, volutpat erat eget, ornare diam. Sed vel ultrices tortor. Sed mattis sed felis vitae tristique. Aliquam venenatis nulla ante, ut finibus nibh dignissim at.",
    },
    2: {
      client: "Dope Client, Acme LLC",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget erat auctor, faucibus ante ac, convallis metus. Nunc facilisis varius semper. Nullam ut augue eu ipsum rhoncus suscipit in ac diam. Vivamus mattis est justo, in congue nunc rutrum eu. Nullam non elit ultrices, mollis ipsum ut, lobortis quam. Vestibulum auctor erat eu ligula tincidunt, a molestie erat mattis. Nam congue placerat dui, at congue nisl eleifend id. Cras quis odio ornare, tristique diam eu, egestas nisi. Ut pulvinar mattis quam quis blandit. Nunc accumsan efficitur enim, non elementum turpis consectetur a. Mauris nec mi non lacus mattis feugiat ac eget nisi. Aenean accumsan diam vitae auctor consectetur. Ut et enim scelerisque, volutpat erat eget, ornare diam. Sed vel ultrices tortor. Sed mattis sed felis vitae tristique. Aliquam venenatis nulla ante, ut finibus nibh dignissim at.",
    },
    3: {
      client: "General Client, Acme BV",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget erat auctor, faucibus ante ac, convallis metus. Nunc facilisis varius semper. Nullam ut augue eu ipsum rhoncus suscipit in ac diam. Vivamus mattis est justo, in congue nunc rutrum eu. Nullam non elit ultrices, mollis ipsum ut, lobortis quam. Vestibulum auctor erat eu ligula tincidunt, a molestie erat mattis. Nam congue placerat dui, at congue nisl eleifend id. Cras quis odio ornare, tristique diam eu, egestas nisi. Ut pulvinar mattis quam quis blandit. Nunc accumsan efficitur enim, non elementum turpis consectetur a. Mauris nec mi non lacus mattis feugiat ac eget nisi. Aenean accumsan diam vitae auctor consectetur. Ut et enim scelerisque, volutpat erat eget, ornare diam. Sed vel ultrices tortor. Sed mattis sed felis vitae tristique. Aliquam venenatis nulla ante, ut finibus nibh dignissim at.",
    },
  }

  const [current, setCurrent] = useState(quotes[0])

  const [active, setActive] = useState(0)

  const handleSetClick = (event) => {
    setCurrent(quotes[event.target.getAttribute('data-quote')]);
    setActive(event.target.getAttribute("data-quote"));
  }

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 40px auto;
        max-width: 700px;
        padding: 40px;
        border: 1px solid lightgrey;

        p {
          text-align: center;
          margin-bottom: 20px;
          color: #7a7979;
          font-family: "Roboto", open sans;
          font-size: 15px;
        }
      `}
    >
      <p>{current.client}</p>
      <p>{current.quote}</p>
      <div
        className={css`
          display: flex;

          span {
            height: 20px;
            width: 20px;
            margin: 0 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }

          span::before {
            content: "";
            height: 6px;
            width: 6px;
            background-color: #d4d4d4;
            border-radius: 50%;
            transition: background-color 0.3 ease;
          }

          span:hover::before {
            background-color: #45454d;
          }

          span[data-quote="${active}"]::before {
            background-color: #45454d;
          }

        `}
      >
        {Object.keys(quotes).map(index => (
          <span
            onClick={event => handleSetClick(event)}
            data-quote={index}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Quote
