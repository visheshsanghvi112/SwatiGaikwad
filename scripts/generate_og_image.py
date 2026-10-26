import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_og_image():
    width = 1200
    height = 630
    
    # 1. Base Dark Luxury Canvas
    img = Image.new("RGBA", (width, height), (14, 15, 17, 255))
    
    # 2. Add Warm Ambient Radial Glow
    glow = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    
    # Glow 1: Terracotta glow behind portrait area
    glow_draw.ellipse([700, 50, 1250, 600], fill=(184, 93, 67, 75))
    # Glow 2: Warm champagne gold glow bottom left
    glow_draw.ellipse([-100, 350, 500, 750], fill=(194, 162, 122, 50))
    # Glow 3: Subtle sage glow top center
    glow_draw.ellipse([400, -100, 800, 300], fill=(83, 100, 79, 35))
    
    glow = glow.filter(ImageFilter.GaussianBlur(80))
    img = Image.alpha_composite(img, glow)
    
    draw = ImageDraw.Draw(img)
    
    # Subtle inner border for luxury card feel
    draw.rectangle([16, 16, width - 17, height - 17], outline=(255, 255, 255, 25), width=1)
    
    # 3. Load Fonts
    serif_font_path = '/System/Library/Fonts/Supplemental/Georgia.ttf'
    sans_font_path = '/System/Library/Fonts/Helvetica.ttc'
    
    try:
        title_font = ImageFont.truetype(serif_font_path, 68)
        subtitle_font = ImageFont.truetype(serif_font_path, 30)
        badge_font = ImageFont.truetype(sans_font_path, 16)
        stat_label_font = ImageFont.truetype(sans_font_path, 15)
        stat_val_font = ImageFont.truetype(serif_font_path, 28)
        url_font = ImageFont.truetype(sans_font_path, 18)
    except Exception:
        title_font = ImageFont.load_default()
        subtitle_font = title_font
        badge_font = title_font
        stat_label_font = title_font
        stat_val_font = title_font
        url_font = title_font

    # 4. Draw Left Content
    # Tagline Pill
    tag_x, tag_y = 70, 75
    draw.rounded_rectangle([tag_x, tag_y, tag_x + 360, tag_y + 36], radius=18, fill=(184, 93, 67, 35), outline=(184, 93, 67, 120), width=1)
    draw.text((tag_x + 18, tag_y + 9), "MUMBAI REAL ESTATE · DIGITAL CREATOR", font=badge_font, fill=(230, 130, 105, 255))
    
    # Title: Swati Gaikwad
    draw.text((70, 135), "Swati Gaikwad", font=title_font, fill=(255, 255, 255, 255))
    
    # Subtitle
    draw.text((72, 222), "Sourcing & Closings Specialist · Content Creator", font=subtitle_font, fill=(224, 200, 168, 255))
    
    # Narrative bio
    bio_text_lines = [
        "7+ years navigating Mumbai's prime residential & commercial markets.",
        "Connecting developers, channel partners, and home seekers with precision,",
        "integrity, and an authentic digital voice (@its_swatified)."
    ]
    bio_y = 280
    for line in bio_text_lines:
        draw.text((72, bio_y), line, font=stat_label_font, fill=(180, 184, 192, 255))
        bio_y += 24
        
    # Stats strip (3 glass cards)
    stats = [
        ("EXPERIENCE", "7+ Years"),
        ("SOURCED", "₹100Cr+"),
        ("INSTAGRAM", "@its_swatified")
    ]
    stat_x = 72
    stat_y = 390
    card_w = 175
    card_h = 75
    
    for label, val in stats:
        draw.rounded_rectangle(
            [stat_x, stat_y, stat_x + card_w, stat_y + card_h],
            radius=14,
            fill=(255, 255, 255, 15),
            outline=(255, 255, 255, 40),
            width=1
        )
        draw.text((stat_x + 14, stat_y + 12), label, font=stat_label_font, fill=(184, 93, 67, 255))
        draw.text((stat_x + 14, stat_y + 34), val, font=stat_val_font, fill=(255, 255, 255, 255))
        stat_x += card_w + 16
        
    # Bottom Verified Strip
    draw.text((72, 530), "swatigaikwad.in · Verified Professional Portfolio", font=url_font, fill=(155, 161, 173, 255))
    
    # 5. Right Column: Swati's Portrait Frame
    portrait_path = "public/assets/swati_portrait_hero.jpg"
    if os.path.exists(portrait_path):
        portrait = Image.open(portrait_path).convert("RGB")
        target_w = 400
        target_h = 490
        
        # Crop & resize to 400x490
        p_w, p_h = portrait.size
        target_ratio = target_w / target_h
        current_ratio = p_w / p_h
        
        if current_ratio > target_ratio:
            new_w = int(p_h * target_ratio)
            left = (p_w - new_w) // 2
            portrait = portrait.crop((left, 0, left + new_w, p_h))
        else:
            new_h = int(p_w / target_ratio)
            top = (p_h - new_h) // 3
            portrait = portrait.crop((0, top, p_w, top + new_h))
            
        portrait = portrait.resize((target_w, target_h), Image.Resampling.LANCZOS)
        
        # Mask with squircle rounded corners
        mask = Image.new("L", (target_w, target_h), 0)
        mask_draw = ImageDraw.Draw(mask)
        mask_draw.rounded_rectangle([0, 0, target_w - 1, target_h - 1], radius=28, fill=255)
        
        # Drop shadow behind portrait
        shadow = Image.new("RGBA", (target_w + 40, target_h + 40), (0, 0, 0, 0))
        shadow_draw = ImageDraw.Draw(shadow)
        shadow_draw.rounded_rectangle([20, 20, target_w + 20, target_h + 20], radius=28, fill=(0, 0, 0, 160))
        shadow = shadow.filter(ImageFilter.GaussianBlur(18))
        
        port_x = 730
        port_y = 70
        img.paste(shadow, (port_x - 20, port_y - 20), shadow)
        img.paste(portrait, (port_x, port_y), mask)
        
        # Overlay border on portrait
        border_overlay = Image.new("RGBA", (target_w, target_h), (0, 0, 0, 0))
        border_draw = ImageDraw.Draw(border_overlay)
        border_draw.rounded_rectangle([0, 0, target_w - 1, target_h - 1], radius=28, outline=(255, 255, 255, 80), width=2)
        img.paste(border_overlay, (port_x, port_y), border_overlay)
        
    # Convert RGBA to RGB and save high quality JPEG
    final_rgb = img.convert("RGB")
    final_rgb.save("public/og-image.jpg", format="JPEG", quality=92)
    print("Open Graph image generated at public/og-image.jpg!")

if __name__ == "__main__":
    create_og_image()
