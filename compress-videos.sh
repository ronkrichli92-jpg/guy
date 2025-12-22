#!/bin/bash

# Script to compress videos for Netlify deployment
# This reduces file sizes while maintaining good quality

echo "🎬 Starting video compression..."
echo "This will take about 10-15 minutes"
echo ""

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null
then
    echo "❌ FFmpeg not found!"
    echo "Please install it first:"
    echo "  macOS: brew install ffmpeg"
    echo "  Ubuntu: sudo apt install ffmpeg"
    exit 1
fi

# Create backup directory
mkdir -p original-videos
echo "📦 Creating backup of original videos..."

# Compress each video
videos=("סרטון1.mp4" "סרטון2.mp4" "סרטון3(ספורט).mp4" "סלוטים .mp4" "7607945-uhd_3840_2160_25fps.mp4" "משחקי שולחן.mp4")

for video in "${videos[@]}"; do
    if [ -f "$video" ]; then
        echo "🔄 Processing: $video"
        
        # Backup original
        cp "$video" "original-videos/$video"
        
        # Compress
        ffmpeg -i "$video" \
            -vcodec h264 \
            -crf 28 \
            -preset fast \
            -vf scale=1280:720 \
            -movflags +faststart \
            -y \
            "${video%.mp4}-compressed.mp4" \
            2>&1 | grep -E "time=|Duration:"
        
        # Replace original with compressed
        mv "${video%.mp4}-compressed.mp4" "$video"
        
        echo "✅ Done: $video"
        echo ""
    fi
done

echo "🎉 All videos compressed!"
echo "📊 New sizes:"
ls -lh *.mp4 | awk '{print $5 "\t" $9}'
echo ""
echo "💾 Original videos backed up in: original-videos/"
echo "🚀 You can now upload to Netlify!"

