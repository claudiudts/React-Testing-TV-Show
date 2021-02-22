import React from 'react';
import { render, screen } from '@testing-library/react';
import Episodes from './Episodes'; 

test('on initial render, no episodes are displayed', () => {
    render(<Episodes episodes={[]}/>)

    // we are going to query for a Negative assertion
    const episode = screen.queryByText(/episode/i);
    expect(episode).toBeNull();
})