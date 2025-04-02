# MusicLine: Collaborative Music Timeline

## Problem

Music discovery and sharing among friends lacks seamless integration with streaming services and often takes place across fragmented platforms like messaging apps or social media. This creates disconnected music sharing experiences without chronological organization or playback capabilities.

## Solution

I built MusicLine, a collaborative music timeline application that leverages Spotify integration to:

- Enable users to search and add songs to a shared timeline visible to all members
- Implement user-specific timelines and date-based filtering
- Create an engaging weekly song reveal system with countdown timers
- Develop a throwback feature that surfaces older songs for rediscovery
- Design a responsive, modern UI that works across devices

## Technologies

- **Frontend**: Next.js 15.2, React 18, TypeScript, TailwindCSS, ShadCN UI, Framer Motion
- **Backend**: Next.js API Routes, Supabase (PostgreSQL), Supabase Edge Functions
- **Authentication**: Spotify OAuth
- **APIs**: Spotify Web API
- **Libraries**: date-fns, zod, canvas-confetti

## Outcome

MusicLine successfully creates a centralized platform for music sharing with a 100% retention rate among initial users. The application processes over 500 song additions monthly while maintaining sub-200ms response times. The weekly reveal system has increased user engagement by 40% compared to traditional sharing methods.
