import addon from '../utils/addon';
import { NodeWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';
import { QPixmap } from '../QtGui/QPixmap';
import { QMovie } from '../QtGui/QMovie';
import { AlignmentFlag } from '../QtEnums/AlignmentFlag';
import { TextFormat } from '../QtEnums/TextFormat';

/**
 
> Create and control text.

* **This class is a JS wrapper around Qt's [QLabel class](https://doc.qt.io/qt-5/qlabel.html)**

A `QLabel` provides ability to add and manipulate text.

### Example

```javascript
const { QLabel } = require("@nodegui/nodegui");

const label = new QLabel();
label.setText("Hello");
```

 */

export class QLabel extends NodeWidget<QLabelSignals> {
    native: NativeElement;
    private _pixmap?: QPixmap;
    private _movie?: QMovie;
    constructor();
    constructor(parent: NodeWidget<any>);
    constructor(parent?: NodeWidget<any>) {
        let native;
        if (parent) {
            native = new addon.QLabel(parent.native);
        } else {
            native = new addon.QLabel();
        }
        super(native);
        this.native = native;
        this.setNodeParent(parent);
    }
    setAlignment(alignment: AlignmentFlag): void {
        this.native.setAlignment(alignment);
    }
    alignment(): AlignmentFlag {
        return this.native.alignment();
    }
    setIndent(indent: number): void {
        this.native.setIndent(indent);
    }
    indent(): number {
        return this.native.indent();
    }
    setMargin(margin: number): void {
        this.native.setMargin(margin);
    }
    margin(): number {
        return this.native.margin();
    }
    setTextFormat(format: TextFormat): void {
        this.native.setTextFormat(format);
    }
    textFormat(): TextFormat {
        return this.native.textFormat();
    }
    setWordWrap(on: boolean): void {
        this.native.setWordWrap(on);
    }
    wordWrap(): boolean {
        return this.native.wordWrap();
    }
    setText(text: string | number): void {
        this.native.setText(`${text}`);
    }
    text(): string {
        return this.native.text();
    }
    setPixmap(pixMap: QPixmap): void {
        this.native.setPixmap(pixMap.native);
        this._pixmap = pixMap;
    }
    pixmap(): QPixmap | undefined {
        return this._pixmap;
    }
    setMovie(movie: QMovie): void {
        this.native.setMovie(movie.native);
        this._movie = movie;
    }
    movie(): QMovie | undefined {
        return this._movie;
    }
    setOpenExternalLinks(open: boolean): void {
        this.native.setOpenExternalLinks(open);
    }
    openExternalLinks(): boolean {
        return this.native.openExternalLinks();
    }
    clear(): void {
        this.native.clear();
    }
}

export type QLabelSignals = QWidgetSignals;