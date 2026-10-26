import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_monogram_icon(size):
    # Create high-res canvas (4x supersampling for ultra-crisp edges)
    scale = 4
    canvas_size = size * scale
    img = Image.new("RGBA", (canvas_size, canvas_size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Outer squircle / rounded rect
    corner_radius = int(canvas_size * 0.22)
    bg_color = (13, 14, 16, 255) # obsidian black
    border_color = (184, 93, 67, 180) # terracotta
    
    # Draw background with rounded corners
    draw.rounded_rectangle(
        [0, 0, canvas_size - 1, canvas_size - 1],
        radius=corner_radius,
        fill=bg_color,
        outline=border_color,
        width=max(1, int(canvas_size * 0.03))
    )
    
    # Load serif font for 'SG'
    font_size = int(canvas_size * 0.52)
    font = None
    for font_path in [
        '/System/Library/Fonts/Supplemental/Georgia.ttf',
        '/System/Library/Fonts/Supplemental/Times New Roman.ttf',
    ]:
        if os.path.exists(font_path):
            try:
                font = ImageFont.truetype(font_path, font_size)
                break
            except Exception:
                pass
                
    if font is None:
        font = ImageFont.load_default()
        
    text = "SG"
    bbox = draw.textbbox((0, 0), text, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    
    # Center text
    text_x = (canvas_size - text_w) / 2 - bbox[0]
    text_y = (canvas_size - text_h) / 2 - bbox[1] - int(canvas_size * 0.02)
    
    # Monogram color (Warm Ivory / Champagne Gold)
    text_color = (244, 235, 224, 255)
    draw.text((text_x, text_y), text, font=font, fill=text_color)
    
    # Accent terracotta dot at top right
    dot_radius = int(canvas_size * 0.055)
    dot_x = int(canvas_size * 0.78)
    dot_y = int(canvas_size * 0.22)
    dot_color = (184, 93, 67, 255)
    draw.ellipse(
        [dot_x - dot_radius, dot_y - dot_radius, dot_x + dot_radius, dot_y + dot_radius],
        fill=dot_color
    )
    
    # Downsample with Lanczos for anti-aliasing
    final_img = img.resize((size, size), Image.Resampling.LANCZOS)
    return final_img

def generate_all():
    os.makedirs("public", exist_ok=True)
    
    # 1. Generate Favicons
    sizes = [16, 32, 48, 180, 192, 512]
    icon_images = {}
    
    for s in sizes:
        icon = create_monogram_icon(s)
        icon_images[s] = icon
        if s == 180:
            icon.save("public/apple-touch-icon.png", format="PNG")
        elif s == 192:
            icon.save("public/favicon-192x192.png", format="PNG")
        elif s == 512:
            icon.save("public/favicon-512x512.png", format="PNG")
        else:
            icon.save(f"public/favicon-{s}x{s}.png", format="PNG")
            
    # Save standard favicon.ico containing 16, 32, 48
    icon_images[32].save(
        "public/favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)]
    )
    print("Favicons generated successfully!")

if __name__ == "__main__":
    generate_all()
