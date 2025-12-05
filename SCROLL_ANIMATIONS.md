# Scroll-Triggered Animations - Configuration Guide

## Overview

The CV portfolio now features enhanced scroll-triggered animations with full configurability for duration, easing, and animation types.

## ScrollReveal Component

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | string | `'fadeIn'` | Animation type to use |
| `delay` | number | `0` | Delay before animation starts (seconds) |
| `duration` | number | `0.6` | Animation duration (seconds) |
| `easing` | string | `'easeOut'` | Easing curve name |
| `threshold` | number | `0.1` | Intersection threshold (0-1) |
| `once` | boolean | `true` | Trigger animation only once |
| `className` | string | `''` | Additional CSS classes |

## Animation Types

### 1. **fadeIn**
Simple opacity fade from 0 to 1
```jsx
<ScrollReveal animation="fadeIn">
  <div>Content</div>
</ScrollReveal>
```

### 2. **slideUp**
Fade in while sliding up from 60px below
```jsx
<ScrollReveal animation="slideUp" duration={0.8}>
  <div>Content</div>
</ScrollReveal>
```

### 3. **slideDown**
Fade in while sliding down from 60px above
```jsx
<ScrollReveal animation="slideDown">
  <div>Content</div>
</ScrollReveal>
```

### 4. **slideLeft**
Fade in while sliding from right (60px)
```jsx
<ScrollReveal animation="slideLeft">
  <div>Content</div>
</ScrollReveal>
```

### 5. **slideRight**
Fade in while sliding from left (60px)
```jsx
<ScrollReveal animation="slideRight">
  <div>Content</div>
</ScrollReveal>
```

### 6. **scaleIn**
Fade in while scaling from 0.8 to 1.0
```jsx
<ScrollReveal animation="scaleIn" easing="bounce">
  <div>Content</div>
</ScrollReveal>
```

### 7. **scaleUp**
Combined scale (0.9) and slide up (20px)
```jsx
<ScrollReveal animation="scaleUp">
  <div>Content</div>
</ScrollReveal>
```

### 8. **slideUpScale**
Slide up (40px) with scale (0.95 to 1.0)
```jsx
<ScrollReveal animation="slideUpScale" duration={0.7}>
  <div>Content</div>
</ScrollReveal>
```

### 9. **rotateIn**
Rotate from -10deg with scale
```jsx
<ScrollReveal animation="rotateIn" easing="elastic">
  <div>Content</div>
</ScrollReveal>
```

### 10. **blurIn**
Fade in from blurred state
```jsx
<ScrollReveal animation="blurIn" duration={1}>
  <div>Content</div>
</ScrollReveal>
```

## Easing Curves

### Available Easing Options

1. **linear** - Constant speed
2. **easeIn** - Slow start, fast end
3. **easeOut** - Fast start, slow end (default)
4. **easeInOut** - Slow start and end
5. **smooth** - Very smooth transition
6. **bounce** - Bouncy effect at end
7. **elastic** - Elastic spring effect

### Usage Examples

```jsx
// Smooth, professional
<ScrollReveal easing="smooth" duration={0.8}>

// Playful bounce
<ScrollReveal animation="scaleIn" easing="bounce">

// Elastic spring
<ScrollReveal animation="slideUp" easing="elastic">
```

## Advanced Configuration

### Staggered Animations

```jsx
{items.map((item, index) => (
  <ScrollReveal 
    key={index}
    animation="slideUp"
    delay={index * 0.1}
    duration={0.6}
    easing="smooth"
  >
    <ItemCard item={item} />
  </ScrollReveal>
))}
```

### Custom Threshold

```jsx
// Trigger when 50% visible
<ScrollReveal threshold={0.5} animation="fadeIn">
  <div>Content</div>
</ScrollReveal>
```

### Repeating Animations

```jsx
// Re-animate every time element enters viewport
<ScrollReveal once={false} animation="slideUp">
  <div>Content</div>
</ScrollReveal>
```

### Combined Effects

```jsx
<ScrollReveal 
  animation="slideUpScale"
  duration={0.8}
  delay={0.2}
  easing="bounce"
  threshold={0.2}
>
  <ProjectCard />
</ScrollReveal>
```

## Performance Optimization

### Best Practices

1. **Use `once={true}`** (default) for better performance
2. **Threshold 0.1-0.3** for early triggering
3. **Duration 0.4-0.8s** for smooth feel
4. **Stagger delays 0.05-0.15s** for sequential items

### Intersection Observer

The component uses Intersection Observer API for:
- ✅ Efficient viewport detection
- ✅ No scroll event listeners
- ✅ Automatic cleanup
- ✅ 50px root margin for early triggering

## Current Implementation

### Hero Section
- Typing animation
- Fade-in elements with delays

### About Section
- `slideRight` for left content
- `slideLeft` for right content
- Staggered skill bars

### Experience Section
- Alternating `slideRight` / `slideLeft` for timeline items
- Individual delays per item

### Projects Section
- `slideUp` animation for project cards
- Staggered delays (index * 0.1)

### Contact Section
- `scaleIn` for contact cards
- Staggered appearance

## Customization Examples

### Futuristic Card Entrance

```jsx
<ScrollReveal 
  animation="slideUpScale"
  duration={0.7}
  easing="smooth"
  delay={0.1}
>
  <div className="glass-effect rounded-xl p-6">
    Card Content
  </div>
</ScrollReveal>
```

### Bouncy Button

```jsx
<ScrollReveal 
  animation="scaleIn"
  easing="bounce"
  duration={0.6}
>
  <button>Click Me</button>
</ScrollReveal>
```

### Smooth Section Title

```jsx
<ScrollReveal 
  animation="blurIn"
  duration={1}
  easing="smooth"
>
  <h2 className="text-gradient">Section Title</h2>
</ScrollReveal>
```

## Browser Compatibility

✅ All modern browsers (Chrome, Firefox, Safari, Edge, Brave)
✅ Intersection Observer API supported
✅ Framer Motion hardware acceleration
✅ 60 FPS smooth animations

## File Location

**Component**: `src/components/ScrollReveal.jsx`

**Import**:
```jsx
import ScrollReveal from './components/ScrollReveal';
```

## Summary

The enhanced ScrollReveal component provides:
- ✅ 10 animation variants
- ✅ 7 easing curves
- ✅ Configurable duration, delay, threshold
- ✅ Once or repeat triggering
- ✅ Optimal performance
- ✅ Dark mode compatible
- ✅ Futuristic aesthetic
