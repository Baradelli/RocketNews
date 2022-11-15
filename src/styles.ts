import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: #fff;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: #121214;
    -webkit-font-smoothing: antialiased;

    font-family: 'League Spartan', 'Work Sans', sans-serif;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  .container-1 {
    display: flex;
    flex-direction: column;

    padding: 3.125rem 2.25rem;

    flex: 1;
    width: 45%;
    height: 100%;

    .container {
      display: flex;
      flex-direction: column;
      gap: 50px;

      h1 {
        color: #04d361;

        font-family: 'Work Sans';
        font-size: 1.5rem;

        margin-bottom: 5px;
      }

      strong {
        font-size: 14px;
        font-weight: 700;

        margin-bottom: 10px;
      }

      p {
        font-weight: 400;
      }

      form {
        all: unset;

        display: flex;
        flex-direction: column;

        gap: 1rem;

        label {
          font-weight: 700;
          font-size: 14px;

          color: #a8a8a8;
        }

        .container-input {
          display: flex;
          flex-direction: row;

          input {
            all: unset;
            background-color: #fff;

            max-height: 50px;

            border-left: 5px solid #04d361;

            padding: 17px 15px;

            color: #6a6a6a;
            flex: 1;

            z-index: 99;
            min-width: 105%;
          }

          img {
            background-color: #8257e5;

            padding: 0px 13px;
            z-index: 99;
            cursor: pointer;

            transition: background 0.2s;

            &:hover {
              background-color: #8e67e7;
            }
          }
        }
      }

      .ler-primeiro {
        display: flex;
        flex-direction: row;

        align-items: center;
        gap: 5px;
        width: fit-content;

        font-weight: bold;
        color: #8257e5;

        cursor: pointer;
      }
    }
  }

  .container-2 {
    width: 55%;
    height: 100vh;

    object-fit: fill;
  }
`
