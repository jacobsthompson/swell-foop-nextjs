import { NextResponse } from "next/server";

export async function GET() {
    const playlistId = "PLiXVv1-G9F_CKDulGIixe7NkqSRE_ghUX";
    const apiKey = process.env.YOUTUBE_API_KEY;

    if (!apiKey) {
        return NextResponse.json({ error: "Missing YouTube API key" }, { status: 500 });
    }

    try {
        const videos = [];
        let nextPageToken = "";

        do {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50&playlistId=${playlistId}&key=${apiKey}&pageToken=${nextPageToken}`,
                { next: { revalidate: 3600 } }
            );

            if (!response.ok) {
                throw new Error(`YouTube API error: ${response.status}`);
            }

            const data = await response.json();

            data.items.forEach((item) => {
                videos.push(item.contentDetails.videoId);
            });

            nextPageToken = data.nextPageToken || "";
        } while (nextPageToken);

        return NextResponse.json(videos, {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}