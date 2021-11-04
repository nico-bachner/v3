import { css, keyframes } from '@nico-bachner/css'
import { useState, useRef, useEffect } from 'react'

type Coordinate = {
    x: number
    y: number
}

type Draw = {
    duration: number
    delay?: number
}

type Move = ['M' | 'm', Coordinate]
type Line = ['L' | 'l', Coordinate]
type Horizontal = ['H' | 'h', number]
type Vertical = ['V' | 'v', number]
type CubicBezier = ['C' | 'c', Coordinate, Coordinate, Coordinate]
type SmoothBezier = ['S' | 's', Coordinate, Coordinate]
type Arc = ['A' | 'a', Coordinate, number, 0 | 1, 0 | 1, Coordinate]
type Return = ['Z']

type Command =
    | Move
    | Line
    | Horizontal
    | Vertical
    | CubicBezier
    | SmoothBezier
    | Arc
    | Return

type PathProps = {
    commands: Command[]
    draw?: Draw
}

const Path: React.VFC<PathProps> = ({ commands, draw }) => {
    const parseCommand = (command: Command) => {
        switch (command[0]) {
            case 'M':
            case 'm':
                return [command[0], command[1].x, command[1].y].join(' ')
            case 'L':
            case 'l':
                return [command[0], command[1].x, command[1].y].join(' ')
            case 'H':
            case 'h':
                return [command[0], command[1]].join(' ')
            case 'V':
            case 'v':
                return [command[0], command[1]].join(' ')
            case 'C':
            case 'c':
                return [
                    command[0],
                    command[1].x,
                    command[1].y,
                    command[2].x,
                    command[2].y,
                    command[3].x,
                    command[3].y,
                ].join(' ')
            case 'S':
            case 's':
                return [
                    command[0],
                    command[1].x,
                    command[1].y,
                    command[2].x,
                    command[2].y,
                ].join(' ')
            case 'A':
            case 'a':
                return [
                    command[0],
                    command[1].x,
                    command[1].y,
                    command[2],
                    command[3],
                    command[4],
                    command[5].x,
                    command[5].y,
                ].join(' ')
            case 'Z':
                return 'Z'
        }
    }

    const path = useRef<SVGPathElement>(null)
    const [length, setLength] = useState<number | undefined>(undefined)

    useEffect(() => {
        if (path.current) {
            setLength(path.current.getTotalLength())
        }
    }, [path])

    const animationDraw = keyframes({
        '0%': { strokeDashoffset: length },
        '100%': { strokeDashoffset: 0 },
    })

    return (
        <path
            d={commands.map((command) => parseCommand(command)).join(' ')}
            ref={path}
            className={
                draw
                    ? css({
                          strokeDasharray: length,
                          strokeDashoffset: length,
                          animationName: `${animationDraw}`,
                          animationDuration: `${draw.duration}ms`,
                          animationTimingFunction: 'linear',
                          animationDelay: `${draw.delay ?? 0}ms`,
                          animationFillMode: 'forwards',
                      })()
                    : undefined
            }
        />
    )
}

export default Path
