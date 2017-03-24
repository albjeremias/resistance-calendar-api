import React, { PropTypes } from 'react';
import { EventCard } from '../';

import styles from './EventsList.sass';

function renderEvents(events, filters) {
  return events.reduce((filteredEvents, event) => {
    if (event.title.toLowerCase().includes(filters.searchText.toLowerCase())) {
      filteredEvents.push(
        <EventCard
          key={event._id}
          event={event}
          className={styles.eventCard}
        />
      );
    }

    return filteredEvents;
  }, []);
}

const EventsList = ({ events, filters }) => {
  return <ul>{renderEvents(events, filters)}</ul>;
};

EventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape()),
  filters: PropTypes.shape()
};

export default EventsList;
