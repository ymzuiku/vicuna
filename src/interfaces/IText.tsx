import engine from '../engine';
import ISprite from './ISprite';

export default interface IText extends ISprite {
  testWord?: string;
  /**语言包*/
  langPacks?: any;
  /**visible不进行任何裁切。*/
  VISIBLE?: string;
  /**scroll 不显示文本域外的字符像素，并且支持 scroll 接口。*/
  SCROLL?: string;
  /**hidden 不显示超出文本域的字符。*/
  HIDDEN?: string;
  /**
   * WebGL渲染文字时是否启用字符缓存，对于字形多的语种，禁用缓存。<br>
   * 对于字形随字母组合变化的语种，如阿拉伯文，启用将使显示错误。但是即使禁用，自动换行也会在错误的地方截断。
   */
  CharacterCache?: boolean;
  /**是否是从右向左的显示顺序*/
  RightToLeft?: boolean;
  /**
   * <p>overflow 指定文本超出文本域后的行为。其值为"hidden"、"visible"和"scroll"之一。</p>
   * <p>性能从高到低依次为：hidden > visible > scroll。</p>
   */
  overflow?: string;
  /**
   * 是否显示下划线。
   */
  underline?: boolean;
  /**
   * 注册位图字体。
   * @param	name		位图字体的名称。
   * @param	bitmapFont	位图字体文件。
   */
  // registerBitmapFont?(name: string, bitmapFont: engine.BitmapFont): void;
  /**
   * 移除注册的位图字体文件。
   * @param	name		位图字体的名称。
   * @param	destroy		是否销毁指定的字体文件。
   */
  // unregisterBitmapFont?(name: string, destroy?: boolean): void;
  /**
   * 设置文字排版模式为右到左。
   */
  // setTextRightToLeft?(): void;
  /**@inheritDoc */
  // destroy?(destroyChild?: boolean): void;
  /**
   * @inheritDoc
   */
  // getGraphicBounds?(realSize?: boolean): engine.Rectangle;
  /**
   * @inheritDoc
   */
  width?: number;
  /**
   * @inheritDoc
   */
  height?: number;
  /**
   * 表示文本的宽度，以像素为单位。
   */
  readonly textWidth?: number;
  /**
   * 表示文本的高度，以像素为单位。
   */
  readonly textHeight?: number;
  /** 当前文本的内容字符串。*/
  text?: string;
  /**
   * <p>根据指定的文本，从语言包中取当前语言的文本内容。并对此文本中的
   * <p>设置Text.langPacks语言包后，即可使用lang获取里面的语言</p>
   * <p>例如：
   * <li>（1）text 的值为“我的名字”，先取到这个文本对应的当前语言版本里的值“My name”，将“My name”设置为当前文本的内容。</li>
   * <li>（2）text 的值为“恭喜你赢得
   * 			则先取到这个文本对应的当前语言版本里的值“Congratulations on your winning
   * 			然后将文本里的
   * 			将替换处理后的文本“Congratulations on your winning 100 diamonds, 200 experience.”设置为当前文本的内容。
   * </li>
   * </p>
   * @param	text 文本内容。
   * @param	...args 文本替换参数。
   */
  // lang?(
  //   text: string,
  //   arg1?: any,
  //   arg2?: any,
  //   arg3?: any,
  //   arg4?: any,
  //   arg5?: any,
  //   arg6?: any,
  //   arg7?: any,
  //   arg8?: any,
  //   arg9?: any,
  //   arg10?: any,
  // ): void;
  /**
   * <p>文本的字体名称，以字符串形式表示。</p>
   * <p>默认值为："Arial"，可以通过Font.defaultFont设置默认字体。</p>
   * <p>如果运行时系统找不到设定的字体，则用系统默认的字体渲染文字，从而导致显示异常。(通常电脑上显示正常，在一些移动端因缺少设置的字体而显示异常)。</p>
   * @see laya.display.css.Font#defaultFamily
   */
  font?: string;
  /**
   * <p>指定文本的字体大小（以像素为单位）。</p>
   * <p>默认为20像素，可以通过 <code>Text.defaultSize</code> 设置默认大小。</p>
   */
  fontSize?: number;
  /**
   * <p>指定文本是否为粗体字。</p>
   * <p>默认值为 false，这意味着不使用粗体字。如果值为 true，则文本为粗体字。</p>
   */
  bold?: boolean;
  /**
   * <p>表示文本的颜色值。可以通过 <code>Text.defaultColor</code> 设置默认颜色。</p>
   * <p>默认值为黑色。</p>
   */
  color?: string;
  /**
   * <p>表示使用此文本格式的文本是否为斜体。</p>
   * <p>默认值为 false，这意味着不使用斜体。如果值为 true，则文本为斜体。</p>
   */
  italic?: boolean;
  /**
   * <p>表示文本的水平显示方式。</p>
   * <p><b>取值：</b>
   * <li>"left"： 居左对齐显示。</li>
   * <li>"center"： 居中对齐显示。</li>
   * <li>"right"： 居右对齐显示。</li>
   * </p>
   */
  align?: string;
  /**
   * <p>表示文本的垂直显示方式。</p>
   * <p><b>取值：</b>
   * <li>"top"： 居顶部对齐显示。</li>
   * <li>"middle"： 居中对齐显示。</li>
   * <li>"bottom"： 居底部对齐显示。</li>
   * </p>
   */
  valign?: string;
  /**
   * <p>表示文本是否自动换行，默认为false。</p>
   * <p>若值为true，则自动换行；否则不自动换行。</p>
   */
  wordWrap?: boolean;
  /**
   * 垂直行间距（以像素为单位）。
   */
  leading?: number;
  /**
   * <p>边距信息。</p>
   * <p>数据格式：[上边距，右边距，下边距，左边距]（边距以像素为单位）。</p>
   */
  padding?: Array<any>;
  /**
   * 文本背景颜色，以字符串表示。
   */
  bgColor?: string;
  /**
   * 文本边框背景颜色，以字符串表示。
   */
  borderColor?: string;
  /**
   * <p>描边宽度（以像素为单位）。</p>
   * <p>默认值0，表示不描边。</p>
   */
  stroke?: number;
  /**
   * <p>描边颜色，以字符串表示。</p>
   * <p>默认值为 "#000000"（黑色）;</p>
   */
  strokeColor?: string;
  /**
   * <p>排版文本。</p>
   * <p>进行宽高计算，渲染、重绘文本。</p>
   */
  // typeset?(): void;
  /**
   * <p>快速更改显示文本。不进行排版计算，效率较高。</p>
   * <p>如果只更改文字内容，不更改文字样式，建议使用此接口，能提高效率。</p>
   * @param text 文本内容。
   */
  // changeText?(text: string): void;
  /**
   * 返回字符在本类实例的父坐标系下的坐标。
   * @param charIndex	索引位置。
   * @param out		（可选）输出的Point引用。
   * @return Point 字符在本类实例的父坐标系下的坐标。如果out参数不为空，则将结果赋值给指定的Point对象，否则创建一个新的Point对象返回。建议使用Point.TEMP作为out参数，可以省去Point对象创建和垃圾回收的开销，尤其是在需要频繁执行的逻辑中，比如帧循环和MOUSE_MOVE事件回调函数里面。
   */
  // getCharPoint?(charIndex: number, out?: engine.Point): engine.Point;
  /**
   * 获取横向滚动量。
   */
  /**
   * <p>设置横向滚动量。</p>
   * <p>即使设置超出滚动范围的值，也会被自动限制在可能的最大值处。</p>
   */
  scrollX?: number;
  /**
   * 获取纵向滚动量。
   */
  /**
   * 设置纵向滚动量（px)。即使设置超出滚动范围的值，也会被自动限制在可能的最大值处。
   */
  scrollY?: number;
  /**
   * 获取横向可滚动最大值。
   */
  readonly maxScrollX?: number;
  /**
   * 获取纵向可滚动最大值。
   */
  readonly maxScrollY?: number;
  readonly lines?: Array<any>;
  underlineColor?: string;
  /**
   * 判断系统是否支持指定的font。
   *
   * @param	font	对font进行支持测试
   * @return	true表示系统支持
   */
  // supportFont?(font: string): boolean;
}
