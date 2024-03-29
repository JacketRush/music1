//BANBAO

enum IOPORT { 
    A = 1,
    B = 2,
    C = 3,
    D = 4,
    E = 5
}

enum MOTORPORT { 
    D = 4,
    E = 5
}

enum  Brake_Type {
    //% block="制动刹车"
    brake = 1,
    //% block="惯性滑行"
    skid = 0
}

enum  White_Black_Line {
    //% block="黑线"
    Black = 1,
    //% block="白线"
    White = 0
}

enum NeoPixelMode {
    //% block="RGB (GRB format)"
    RGB = 0,
    //% block="RGB+W"
    RGBW = 1,
    //% block="RGB (RGB format)"
    RGB_RGB = 2
}

enum NeoPixelColors {
    //% block=red
    Red = 0xFF0000,
    //% block=orange
    Orange = 0xFFA500,
    //% block=yellow
    Yellow = 0xFFFF00,
    //% block=green
    Green = 0x00FF00,
    //% block=blue
    Blue = 0x0000FF,
    //% block=indigo
    Indigo = 0x4b0082,
    //% block=violet
    Violet = 0x8a2be2,
    //% block=purple
    Purple = 0xFF00FF,
    //% block=white
    White = 0xFFFFFF,
    //% block=black
    Black = 0x000000
}
//--------------------------------------------------------
enum Note1 {
    //% blockIdentity=music.noteFrequency enumval=262
    C = 262,
    //% block=C#
    //% blockIdentity=music.noteFrequency enumval=277
    CSharp = 277,
    //% blockIdentity=music.noteFrequency enumval=294
    D = 294,
    //% blockIdentity=music.noteFrequency enumval=311
    Eb = 311,
    //% blockIdentity=music.noteFrequency enumval=330
    E = 330,
    //% blockIdentity=music.noteFrequency enumval=349
    F = 349,
    //% block=F#
    //% blockIdentity=music.noteFrequency enumval=370
    FSharp = 370,
    //% blockIdentity=music.noteFrequency enumval=392
    G = 392,
    //% block=G#
    //% blockIdentity=music.noteFrequency enumval=415
    GSharp = 415,
    //% blockIdentity=music.noteFrequency enumval=440
    A = 440,
    //% blockIdentity=music.noteFrequency enumval=466
    Bb = 466,
    //% blockIdentity=music.noteFrequency enumval=494
    B = 494,
    //% blockIdentity=music.noteFrequency enumval=131
    C3 = 131,
    //% block=C#3
    //% blockIdentity=music.noteFrequency enumval=139
    CSharp3 = 139,
    //% blockIdentity=music.noteFrequency enumval=147
    D3 = 147,
    //% blockIdentity=music.noteFrequency enumval=156
    Eb3 = 156,
    //% blockIdentity=music.noteFrequency enumval=165
    E3 = 165,
    //% blockIdentity=music.noteFrequency enumval=175
    F3 = 175,
    //% block=F#3
    //% blockIdentity=music.noteFrequency enumval=185
    FSharp3 = 185,
    //% blockIdentity=music.noteFrequency enumval=196
    G3 = 196,
    //% block=G#3
    //% blockIdentity=music.noteFrequency enumval=208
    GSharp3 = 208,
    //% blockIdentity=music.noteFrequency enumval=220
    A3 = 220,
    //% blockIdentity=music.noteFrequency enumval=233
    Bb3 = 233,
    //% blockIdentity=music.noteFrequency enumval=247
    B3 = 247,
    //% blockIdentity=music.noteFrequency enumval=262
    C4 = 262,
    //% block=C#4
    //% blockIdentity=music.noteFrequency enumval=277
    CSharp4 = 277,
    //% blockIdentity=music.noteFrequency enumval=294
    D4 = 294,
    //% blockIdentity=music.noteFrequency enumval=311
    Eb4 = 311,
    //% blockIdentity=music.noteFrequency enumval=330
    E4 = 330,
    //% blockIdentity=music.noteFrequency enumval=349
    F4 = 349,
    //% block=F#4
    //% blockIdentity=music.noteFrequency enumval=370
    FSharp4 = 370,
    //% blockIdentity=music.noteFrequency enumval=392
    G4 = 392,
    //% block=G#4
    //% blockIdentity=music.noteFrequency enumval=415
    GSharp4 = 415,
    //% blockIdentity=music.noteFrequency enumval=440
    A4 = 440,
    //% blockIdentity=music.noteFrequency enumval=466
    Bb4 = 466,
    //% blockIdentity=music.noteFrequency enumval=494
    B4 = 494,
    //% blockIdentity=music.noteFrequency enumval=523
    C5 = 523,
    //% block=C#5
    //% blockIdentity=music.noteFrequency enumval=555
    CSharp5 = 555,
    //% blockIdentity=music.noteFrequency enumval=587
    D5 = 587,
    //% blockIdentity=music.noteFrequency enumval=622
    Eb5 = 622,
    //% blockIdentity=music.noteFrequency enumval=659
    E5 = 659,
    //% blockIdentity=music.noteFrequency enumval=698
    F5 = 698,
    //% block=F#5
    //% blockIdentity=music.noteFrequency enumval=740
    FSharp5 = 740,
    //% blockIdentity=music.noteFrequency enumval=784
    G5 = 784,
    //% block=G#5
    //% blockIdentity=music.noteFrequency enumval=831
    GSharp5 = 831,
    //% blockIdentity=music.noteFrequency enumval=880
    A5 = 880,
    //% blockIdentity=music.noteFrequency enumval=932
    Bb5 = 932,
    //% blockIdentity=music.noteFrequency enumval=988
    B5 = 988,
}

enum BeatFraction1 {
    //% block=1
    Whole = 1,
    //% block="1/2"
    Half = 2,
    //% block="1/4"
    Quarter = 4,
    //% block="1/8"
    Eighth = 8,
    //% block="1/16"
    Sixteenth = 16,
    //% block="2"
    Double = 32,
    //% block="4",
    Breve = 64
}

enum MelodyOptions1 {
    //% block="once"
    Once = 1,
    //% block="forever"
    Forever = 2,
    //% block="once in background"
    OnceInBackground = 4,
    //% block="forever in background"
    ForeverInBackground = 8
}

enum MelodyStopOptions1 {
    //% block="all"
    All = MelodyOptions1.Once | MelodyOptions1.OnceInBackground,
    //% block="foreground"
    Foreground = MelodyOptions1.Once,
    //% block="background"
    Background = MelodyOptions1.OnceInBackground
}

enum MusicEvent1 {
    //% block="melody note1 played"
    MelodyNotePlayed = 1,
    //% block="melody started"
    MelodyStarted = 2,
    //% block="melody ended"
    MelodyEnded = 3,
    //% block="melody repeated"
    MelodyRepeated = 4,
    //% block="background melody note1 played"
    BackgroundMelodyNotePlayed = MelodyNotePlayed | 0xf0,
    //% block="background melody started"
    BackgroundMelodyStarted = MelodyStarted | 0xf0,
    //% block="background melody ended"
    BackgroundMelodyEnded = MelodyEnded | 0xf0,
    //% block="background melody repeated"
    BackgroundMelodyRepeated = MelodyRepeated | 0xf0,
    //% block="background melody paused"
    BackgroundMelodyPaused = 5 | 0xf0,
    //% block="background melody resumed"
    BackgroundMelodyResumed = 6 | 0xf0
}

/**
 * Sonar and ping utilities
 */
//% color="#2c3e50" weight=10
namespace Banbao {

    let beatsPerMinute: number = 120;
    //% whenUsed
    const freqs = hex`
       1f00210023002500270029002c002e003100340037003a003e004100450049004e00520057005c00620068006e00
       75007b0083008b0093009c00a500af00b900c400d000dc00e900f70006011501260137014a015d01720188019f01
       b801d201ee010b022a024b026e029302ba02e40210033f037003a403dc03170455049704dd0427057505c8052006
       7d06e0064907b8072d08a9082d09b9094d0aea0a900b400cfa0cc00d910e6f0f5a1053115b1272139a14d4152017
       8018f519801b231dde1e`;
   let _playTone: (frequency: number, duration: number) => void;
   const MICROBIT_MELODY_ID = 2000;

    /**
     * Send a ping and get the echo time (in microseconds) as a result
     * @param io 在此处描述参数, eg: "C"
     * @param maxCmDistance 在此处描述参数, eg: "500"
     */
    //% blockId=sonar_ping block="超声波 端口 %io|最大距离 %maxCmDistance  厘米"
    export function ping(io: IOPORT,  maxCmDistance = 500): number {
        // send pulse
        let trig: DigitalPin;
        let echo: DigitalPin;
        switch (io) { 
            case 3: trig = DigitalPin.P5; echo = DigitalPin.P11; break;
            case 5: trig = DigitalPin.P14; echo = DigitalPin.P15; break;
        }
        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 0);
        // read pulse
        const d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * 58);
        return Math.idiv(d,58);
    }

    /**
       检查巡线传感器测定的是白线还是黑线

     */
    //% blockId=octopus_adkeyboard weight=90 blockGap=30
    //% block="巡线传感器 端口 %io 是否 %state"

    export function Rpatrol(io: IOPORT, state: White_Black_Line): boolean {
        let p: DigitalPin;
        switch (io) { 
            case 1: p = DigitalPin.P3; break;
            case 2: p = DigitalPin.P11; break;
            case 3: p = DigitalPin.P5; break;
        }
        
        if (pins.digitalReadPin(p) == state)
            return true;
        else
            return false;
    }
 
    /**
     * 吃葡萄不吐葡萄皮
     * @param io 在此处描述参数, eg: "D"
     * @param speed 在此处描述参数, eg: "50"
     */
    //% block="电机 端口 %io 速度 %speed"
    //% speed.min=-1023 speed.max=1023
    export function motor(io: MOTORPORT, speed: number) {
        let io1: DigitalPin;   //pin8 pin16
        let io2: AnalogPin;    //pin1 pin2
        switch (io) { 
            case 4: io1 = DigitalPin.P8; io2=AnalogPin.P1; break;
            case 5: io1 = DigitalPin.P16; io2=AnalogPin.P2; break;
        }       
        if(speed>=0)
        {
            pins.digitalWritePin(io1,0);
            pins.analogWritePin(io2,speed);
        }
        else
        {
            pins.digitalWritePin(io1,1);
            pins.analogWritePin(io2,1023+speed);           
        }
    }

    /**
     * 红鲤鱼与绿鲤鱼与驴
     */
    //% block="电机 端口 %io %Bratype"
    export function MotorStop(io: MOTORPORT, Bratype: Brake_Type) {
        let io1: DigitalPin;   //pin8 pin16
        let io2: DigitalPin;    //pin1 pin2
        switch (io) { 
            case 4: io1 = DigitalPin.P8; io2=DigitalPin.P1; break;
            case 5: io1 = DigitalPin.P16; io2=DigitalPin.P2; break;
        }     
        pins.digitalWritePin(io1,Bratype);
        pins.digitalWritePin(io2,Bratype);  

    }


  /**
     * A NeoPixel strip
     */


    export class Strip {
        buf: Buffer;
        pin: DigitalPin;
        // TODO: encode as bytes instead of 32bit
        brightness: number;
        start: number; // start offset in LED strip
        _length: number; // number of LEDs
        _mode: NeoPixelMode;
        _matrixWidth: number; // number of leds in a matrix - if any

        /**
         * Shows all LEDs to a given color (range 0-255 for r, g, b). 
         * @param rgb RGB color of the LED
         */
        //% blockId="neopixel_set_strip_color" block="%strip|show color %rgb=neopixel_colors" 
        //% weight=85 blockGap=8

        showColor(rgb: number) {
            rgb = rgb >> 0;
//            this.setAllRGB(rgb);
            this.show();
        }
    
        show() {
//            ws2812b.sendBuffer(this.buf, this.pin);
            ;
        }
   /**
         * Set the brightness of the strip. This flag only applies to future operation.
         * @param brightness a measure of LED brightness in 0-255. eg: 255
         */
        //% blockId="neopixel_set_brightness" block="%strip|set brightness %brightness" blockGap=8
        //% weight=59
 
        setBrightness(brightness: number): void {
            this.brightness = brightness & 0xff;
        }


        /** 
         * Create a range of LEDs.
         * @param start offset in the LED strip to start the range
         * @param length number of LEDs in the range. eg: 4
         */
        //% weight=89
        //% blockId="neopixel_range" block="%strip|range from %start|with %length|leds"

        //% blockSetVariable=range
        range(start: number, length: number): Strip {
            start = start >> 0;
            length = length >> 0;
            let strip = new Strip();
            strip.buf = this.buf;
            strip.pin = this.pin;
            strip.brightness = this.brightness;
            strip.start = this.start + Math.clamp(0, this._length - 1, start);
            strip._length = Math.clamp(0, this._length - (strip.start - this.start), length);
            strip._matrixWidth = 0;
            strip._mode = this._mode;
            return strip;
        }


        /**
         * Set the pin where the neopixel is connected, defaults to P0.
         */
        //% weight=10

        setPin(pin: DigitalPin): void {
            this.pin = pin;
            pins.digitalWritePin(this.pin, 0);
            // don't yield to avoid races on initialization
        }
        private setBufferRGB(offset: number, red: number, green: number, blue: number): void {
            if (this._mode === NeoPixelMode.RGB_RGB) {
                this.buf[offset + 0] = red;
                this.buf[offset + 1] = green;
            } else {
                this.buf[offset + 0] = green;
                this.buf[offset + 1] = red;
            }
            this.buf[offset + 2] = blue;
        }

        private setAllRGB(rgb: number) {
            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            const br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            const end = this.start + this._length;
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            for (let i = this.start; i < end; ++i) {
                this.setBufferRGB(i * stride, red, green, blue)
            }
        }
        private setAllW(white: number) {
            if (this._mode !== NeoPixelMode.RGBW)
                return;

            let br = this.brightness;
            if (br < 255) {
                white = (white * br) >> 8;
            }
            let buf = this.buf;
            let end = this.start + this._length;
            for (let i = this.start; i < end; ++i) {
                let ledoffset = i * 4;
                buf[ledoffset + 3] = white;
            }
        }
        private setPixelRGB(pixeloffset: number, rgb: number): void {
            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            let stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            pixeloffset = (pixeloffset + this.start) * stride;

            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            let br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            this.setBufferRGB(pixeloffset, red, green, blue)
        }
        private setPixelW(pixeloffset: number, white: number): void {
            if (this._mode !== NeoPixelMode.RGBW)
                return;

            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            pixeloffset = (pixeloffset + this.start) * 4;

            let br = this.brightness;
            if (br < 255) {
                white = (white * br) >> 8;
            }
            let buf = this.buf;
            buf[pixeloffset + 3] = white;
        }
    }


    /**
     * Create a new NeoPixel driver for LEDs.
     * @param io the pin where the neopixel is connected.
     */
    //% blockId="neopixel_create" block="NeoPixel at io %io|with 3leds as RGB"
    //% weight=90 blockGap=8
    //% trackArgs=0,2
    //% blockSetVariable=strip
    export function create(io: IOPORT): Strip {
        let strip = new Strip();
        strip.start = 0;
        strip._length = 3;
        strip._mode = NeoPixelMode.RGB;
        strip._matrixWidth = 0;
        strip.setBrightness(128);
        return strip;
    }

    /**
     * Converts red, green, blue channels into a RGB color
     * @param red value of the red channel between 0 and 255. eg: 255
     * @param green value of the green channel between 0 and 255. eg: 255
     * @param blue value of the blue channel between 0 and 255. eg: 255
     */
    //% weight=1
    //% block="red %red|green %green|blue %blue"
    export function rgb(red: number, green: number, blue: number): number {
        return packRGB(red, green, blue);
    }


    /**
     * Gets the RGB value of a known color
    */
    //% weight=2 blockGap=8
    //% blockId="neopixel_colors" block="%color"

    export function colors(color: NeoPixelColors): number {
        return color;
    }

    function packRGB(a: number, b: number, c: number): number {
        return ((a & 0xFF) << 16) | ((b & 0xFF) << 8) | (c & 0xFF);
    }
    function unpackR(rgb: number): number {
        let r = (rgb >> 16) & 0xFF;
        return r;
    }
    function unpackG(rgb: number): number {
        let g = (rgb >> 8) & 0xFF;
        return g;
    }
    function unpackB(rgb: number): number {
        let b = (rgb) & 0xFF;
        return b;
    }
//---------------------------------------------------------------------------
/**
     * Plays a tone through pin ``P0`` for the given duration.
     * @param frequency pitch of the tone to play in Hertz (Hz), eg: Note1.C
     * @param ms tone duration in milliseconds (ms)
     */
    //% help=music/play-tone weight=90
    //% blockId=device_play_note block="play|tone %note=device_note|for %duration=device_beat" blockGap=8
    //% parts="headphone"
    //% useEnumVal=1
    export function playTone(frequency: number, ms: number): void {
        if (_playTone) _playTone(frequency, ms);
        else pins.analogPitch(frequency, ms);
    }

    /**
     * Plays a tone through pin ``P0``.
     * @param frequency pitch of the tone to play in Hertz (Hz), eg: Note1.C
     */
    //% help=music/ring-tone weight=80
    //% blockId=device_ring block="ring tone (Hz)|%note=device_note" blockGap=8
    //% parts="headphone"
    //% useEnumVal=1
    export function ringTone(frequency: number): void {
        playTone(frequency, 0);
    }

    /**
     * Rests (plays nothing) for a specified time through pin ``P0``.
     * @param ms rest duration in milliseconds (ms)
     */
    //% help=music/rest weight=79
    //% blockId=device_rest block="rest(ms)|%duration=device_beat"
    //% parts="headphone"
    export function rest(ms: number): void {
        playTone(0, ms);
    }


    /**
     * Gets the frequency of a note1.
     * @param name the note1 name
     */
    //% weight=50 help=music/note1-frequency
    //% blockId=device_note block="%name"
    //% shim=TD_ID color="#FFFFFF" colorSecondary="#FFFFFF"
    //% name.fieldEditor="note1" name.defl="262"
    //% name.fieldOptions.decompileLiterals=true
    //% useEnumVal=1
    export function noteFrequency(name: Note1): number {
        return name;
    }

    function init() {
        if (beatsPerMinute <= 0) beatsPerMinute = 120;
    }

    /**
     * Returns the duration of a beat in milli-seconds
     */
    //% help=music/beat weight=49
    //% blockId=device_beat block="%fraction|beat"
    export function beat(fraction?: BeatFraction1): number {
        init();
        if (fraction == null) fraction = BeatFraction1.Whole;
        let beat = Math.idiv(60000, beatsPerMinute);
        switch (fraction) {
            case BeatFraction1.Half: return beat >> 1;
            case BeatFraction1.Quarter: return beat >> 2;
            case BeatFraction1.Eighth: return beat >> 3;
            case BeatFraction1.Sixteenth: return beat >> 4;
            case BeatFraction1.Double: return beat << 1;
            case BeatFraction1.Breve: return beat << 2;
            default: return beat;
        }
    }

    /**
     * Returns the tempo in beats per minute. Tempo is the speed (bpm = beats per minute) at which notes play. The larger the tempo value, the faster the notes will play.
     */
    //% help=music/tempo weight=40
    //% blockId=device_tempo block="tempo (bpm)" blockGap=8
    export function tempo(): number {
        init();
        return beatsPerMinute;
    }

    /**
     * Change the tempo by the specified amount
     * @param bpm The change in beats per minute to the tempo, eg: 20
     */
    //% help=music/change-tempo-by weight=39
    //% blockId=device_change_tempo block="change tempo by (bpm)|%value" blockGap=8
    export function changeTempoBy(bpm: number): void {
        init();
        setTempo(beatsPerMinute + bpm);
    }

    /**
     * Sets the tempo to the specified amount
     * @param bpm The new tempo in beats per minute, eg: 120
     */
    //% help=music/set-tempo weight=38
    //% blockId=device_set_tempo block="set tempo to (bpm)|%value"
    //% bpm.min=4 bpm.max=400
    export function setTempo(bpm: number): void {
        init();
        if (bpm > 0) {
            beatsPerMinute = Math.max(1, bpm);
        }
    }

    let currentMelody: Melody;
    let currentBackgroundMelody: Melody;

    
    /**
     * Registers code to run on various melody events
     */
    //% blockId=melody_on_event block="music on %value"
    //% help=music/on-event weight=59 blockGap=32
    export function onEvent(value: MusicEvent1, handler: () => void) {
        control.onEvent(MICROBIT_MELODY_ID, value, handler);
    }

    /**
     * Starts playing a melody.
     * Notes are expressed as a string of characters with this format: NOTE[octave][:duration]
     * @param melodyArray the melody array to play
     * @param options melody options, once / forever, in the foreground / background
     */
    //% help=music/begin-melody weight=60 blockGap=16
    //% blockId=device_start_melody block="start melody %melody=device_builtin_melody| repeating %options"
    //% parts="headphone"
    export function beginMelody(melodyArray: string[], options: MelodyOptions1 = 1) {
        init();
        if (currentMelody != undefined) {
            if (((options & MelodyOptions1.OnceInBackground) == 0)
                && ((options & MelodyOptions1.ForeverInBackground) == 0)
                && currentMelody.background) {
                currentBackgroundMelody = currentMelody;
                currentMelody = null;
                control.raiseEvent(MICROBIT_MELODY_ID, MusicEvent1.BackgroundMelodyPaused);
            }
            if (currentMelody)
                control.raiseEvent(MICROBIT_MELODY_ID, currentMelody.background ? MusicEvent1.BackgroundMelodyEnded : MusicEvent1.MelodyEnded);
            currentMelody = new Melody(melodyArray, options);
            control.raiseEvent(MICROBIT_MELODY_ID, currentMelody.background ? MusicEvent1.BackgroundMelodyStarted : MusicEvent1.MelodyStarted);
        } else {
            currentMelody = new Melody(melodyArray, options);
            control.raiseEvent(MICROBIT_MELODY_ID, currentMelody.background ? MusicEvent1.BackgroundMelodyStarted : MusicEvent1.MelodyStarted);
            // Only start the fiber once
            control.inBackground(() => {
                while (currentMelody.hasNextNote()) {
                    playNextNote(currentMelody);
                    if (!currentMelody.hasNextNote() && currentBackgroundMelody) {
                        // Swap the background melody back
                        currentMelody = currentBackgroundMelody;
                        currentBackgroundMelody = null;
                        control.raiseEvent(MICROBIT_MELODY_ID, MusicEvent1.MelodyEnded);
                        control.raiseEvent(MICROBIT_MELODY_ID, MusicEvent1.BackgroundMelodyResumed);
                    }
                }
                control.raiseEvent(MICROBIT_MELODY_ID, currentMelody.background ? MusicEvent1.BackgroundMelodyEnded : MusicEvent1.MelodyEnded);
                currentMelody = null;
            })
        }
    }

    /**
     * Stops the melodies
     * @param options which melody to stop
     */
    //% help=music/stop-melody weight=59 blockGap=16
    //% blockId=device_stop_melody block="stop melody $options"
    //% parts="headphone"
    export function stopMelody(options: MelodyStopOptions1) {
        if (options & MelodyStopOptions1.Background)
            beginMelody([], MelodyOptions1.OnceInBackground);
        if (options & MelodyStopOptions1.Foreground)
            beginMelody([], MelodyOptions1.Once);
    }

    /**
     * Sets a custom playTone function for playing melodies
     */
    //% help=music/set-play-tone
    //% advanced=true
    export function setPlayTone(f: (frequency: number, duration: number) => void) {
        _playTone = f;
    }

    function playNextNote(melody: Melody): void {
        // cache elements
        let currNote = melody.nextNote();
        let currentPos = melody.currentPos;
        let currentDuration = melody.currentDuration;
        let currentOctave = melody.currentOctave;

        let note: number;
        let isrest: boolean = false;
        let beatPos: number;
        let parsingOctave: boolean = true;
        let prevNote: boolean = false;

        for (let pos = 0; pos < currNote.length; pos++) {
            let noteChar = currNote.charAt(pos);
            switch (noteChar) {
                case 'c': case 'C': note = 1; prevNote = true; break;
                case 'd': case 'D': note = 3; prevNote = true; break;
                case 'e': case 'E': note = 5; prevNote = true; break;
                case 'f': case 'F': note = 6; prevNote = true; break;
                case 'g': case 'G': note = 8; prevNote = true; break;
                case 'a': case 'A': note = 10; prevNote = true; break;
                case 'B': note = 12; prevNote = true; break;
                case 'r': case 'R': isrest = true; prevNote = false; break;
                case '#': note++; prevNote = false; break;
                case 'b': if (prevNote) note--; else { note = 12; prevNote = true; } break;
                case ':': parsingOctave = false; beatPos = pos; prevNote = false; break;
                default: prevNote = false; if (parsingOctave) currentOctave = parseInt(noteChar);
            }
        }
        if (!parsingOctave) {
            currentDuration = parseInt(currNote.substr(beatPos + 1, currNote.length - beatPos));
        }
        let beat = Math.idiv(60000, beatsPerMinute) >> 2;
        if (isrest) {
            music.rest(currentDuration * beat)
        } else {
            let keyNumber = note + (12 * (currentOctave - 1));
            let frequency = freqs.getNumber(NumberFormat.UInt16LE, keyNumber * 2) || 0;
            music.playTone(frequency, currentDuration * beat);
        }
        melody.currentDuration = currentDuration;
        melody.currentOctave = currentOctave;
        const repeating = melody.repeating && currentPos == melody.melodyArray.length - 1;
        melody.currentPos = repeating ? 0 : currentPos + 1;

        control.raiseEvent(MICROBIT_MELODY_ID, melody.background ? MusicEvent1.BackgroundMelodyNotePlayed : MusicEvent1.MelodyNotePlayed);
        if (repeating)
            control.raiseEvent(MICROBIT_MELODY_ID, melody.background ? MusicEvent1.BackgroundMelodyRepeated : MusicEvent1.MelodyRepeated);
    }

    class Melody {
        public melodyArray: string[];
        public currentDuration: number;
        public currentOctave: number;
        public currentPos: number;
        public repeating: boolean;
        public background: boolean;

        constructor(melodyArray: string[], options: MelodyOptions1) {
            this.melodyArray = melodyArray;
            this.repeating = ((options & MelodyOptions1.Forever) != 0);
            this.repeating = this.repeating ? true : ((options & MelodyOptions1.ForeverInBackground) != 0)
            this.background = ((options & MelodyOptions1.OnceInBackground) != 0);
            this.background = this.background ? true : ((options & MelodyOptions1.ForeverInBackground) != 0);
            this.currentDuration = 4; //Default duration (Crotchet)
            this.currentOctave = 4; //Middle octave
            this.currentPos = 0;
        }

        hasNextNote() {
            return this.repeating || this.currentPos < this.melodyArray.length;
        }

        nextNote(): string {
            const currentNote = this.melodyArray[this.currentPos];
            return currentNote;
        }
    }

}   
