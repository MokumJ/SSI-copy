import React, { useState } from "react"

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

  const handleSetClick = () => {
    console.log('hello')
  }
  
  return (
    <div>
      <p>{current.client}</p>
      <p>{current.quote}</p>
      <div>
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
