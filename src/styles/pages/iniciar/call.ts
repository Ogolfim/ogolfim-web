import styled from 'styled-components';

export const Main = styled.main`
  max-width: 76rem;
  margin: 3rem 6%;

  @media (min-width: 786px) {
    margin: 5rem 6%;

    > button {
      font-size: 1.1em;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 786px) {
    flex-direction: row;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;

export const CalenderHeader = styled.header`
  > h1 {
    @media (min-width: 768px) {
      margin-bottom: 0.4rem;
    }
  }

  > p {
    margin-bottom: 2rem;
  }
`;

export const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > h3 {
    font-size: 1.3em;
    text-align: center;
    margin-bottom: 0.3rem;
    padding: 1rem;
  }

  > h3 svg {
    width: 1.2rem;
  }

  .ogolfim {
    width: 20rem;
    height: 19.3rem;
    max-width: 40rem;
    background: var(--color-primary);
    color: var(--color-white);
    font-family: 'Hurme Geometric Sans 1', sans-serif;
    letter-spacing: 0.02em;

    @media (min-width: 768px) {
      width: 26rem;
    }
  }

  .ogolfim >.react-calendar__navigation {
    background: var(--color-blue); 
    padding: 0 .7rem; 
  }

  .ogolfim >.react-calendar__navigation > button {
    color: var(--color-white);
  }

  .ogolfim > .react-calendar__navigation button:enabled:hover,
  .ogolfim > .react-calendar__navigation button:enabled:focus {
    background-color: transparent;
    color: var(--color-white);
  }

  .ogolfim > .react-calendar__navigation button[disabled] {
    background-color: transparent;
  }

  .ogolfim >.react-calendar__navigation > .react-calendar__navigation__label > span {
    text-transform: uppercase;
    font-family: 'Hurme Geometric Sans 1 Black', sans-serif;
  }

  .ogolfim .react-calendar__navigation .react-calendar__navigation__arrow:enabled:hover,
  .react-calendar__navigation .react-calendar__navigation__arrow:enabled:focus {
    background: var(--color-blue); 
    font-size: 1.3em;
  }

  .ogolfim .react-calendar__navigation .react-calendar__navigation__arrow[disabled] {
    background: var(--color-blue);
    font-size: 1.3em; 
  }

  .ogolfim .react-calendar__viewContainer {
    padding: 0 .7rem;
  }

  .ogolfim .react-calendar__viewContainer .react-calendar__month-view__weekdays {
    text-transform: capitalize;
    font-weight: normal;
    font-family: 'Hurme Geometric Sans 1', sans-serif;
  }

  .ogolfim .react-calendar__viewContainer .react-calendar__month-view__weekdays__weekday abbr{
    text-decoration: none;
  }

  .ogolfim .react-calendar__viewContainer div > button {
    font-family: 'Hurme Geometric Sans 1', sans-serif;
    color: var(--color-white);
  }

  .ogolfim .react-calendar__viewContainer div > button abbr {
    font-size: 0.9em;
  }

  .ogolfim .react-calendar__tile--active {
    background: var(--color-blue-light);
  }

  .ogolfim .react-calendar__tile--active:enabled:hover,
  .ogolfim .react-calendar__tile--active:enabled:focus {
    background: var(--color-blue-light);
  }

  .ogolfim .react-calendar__decade-view__years__year:hover,
  .ogolfim .react-calendar__year-view__months__month:hover,
  .ogolfim .react-calendar__month-view__days__day:hover {
    border: .07rem solid var(--color-blue-light);
    background-color: transparent;
  }

  .ogolfim .react-calendar__tile--now {
    background: rgba(255, 165, 0, 0.2);
  }

  .ogolfim .react-calendar__tile--now:enabled:hover,
  .ogolfim .react-calendar__tile--now:enabled:focus {
    background: var(--color-blue-light);
  }
`;

