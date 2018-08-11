import engine from '../engine';
import INode from './INode';

export default interface ISprite extends INode {
  /**
   * <p>鼠标事件与此对象的碰撞检测是否可穿透。碰撞检测发生在鼠标事件的捕获阶段，此阶段引擎会从stage开始递归检测stage及其子对象，直到找到命中的目标对象或者未命中任何对象。</p>
   * <p>穿透表示鼠标事件发生的位置处于本对象绘图区域内时，才算命中，而与对象宽高和值为Rectangle对象的hitArea属性无关。如果sprite.hitArea值是HitArea对象，表示显式声明了此对象的鼠标事件响应区域，而忽略对象的宽高、mouseThrough属性。</p>
   * <p>影响对象鼠标事件响应区域的属性为：width、height、hitArea，优先级顺序为：hitArea(type:HitArea)>hitArea(type:Rectangle)>width/height。</p>
   * @default false	不可穿透，此对象的鼠标响应区域由width、height、hitArea属性决定。</p>
   */
  mouseThrough?: boolean;
  /**
   * <p>指定是否自动计算宽高数据。默认值为 false 。</p>
   * <p>Sprite宽高默认为0，并且不会随着绘制内容的变化而变化，如果想根据绘制内容获取宽高，可以设置本属性为true，或者通过getBounds方法获取。设置为true，对性能有一定影响。</p>
   */
  autoSize?: boolean;
  /**
   * <p>指定鼠标事件检测是优先检测自身，还是优先检测其子对象。鼠标事件检测发生在鼠标事件的捕获阶段，此阶段引擎会从stage开始递归检测stage及其子对象，直到找到命中的目标对象或者未命中任何对象。</p>
   * <p>如果为false，优先检测子对象，当有子对象被命中时，中断检测，获得命中目标。如果未命中任何子对象，最后再检测此对象；如果为true，则优先检测本对象，如果本对象没有被命中，直接中断检测，表示没有命中目标；如果本对象被命中，则进一步递归检测其子对象，以确认最终的命中目标。</p>
   * <p>合理使用本属性，能减少鼠标事件检测的节点，提高性能。可以设置为true的情况：开发者并不关心此节点的子节点的鼠标事件检测结果，也就是以此节点作为其子节点的鼠标事件检测依据。</p>
   * <p>Stage对象和UI的View组件默认为true。</p>
   * @default false	优先检测此对象的子对象，当递归检测完所有子对象后，仍然没有找到目标对象，最后再检测此对象。
   */
  hitTestPrior?: boolean;
  /**
   * <p>视口大小，视口外的子对象，将不被渲染(如果想实现裁剪效果，请使用srollRect)，合理使用能提高渲染性能。比如由一个个小图片拼成的地图块，viewport外面的小图片将不渲染</p>
   * <p>srollRect和viewport的区别：<br/>
   * 1. srollRect自带裁剪效果，viewport只影响子对象渲染是否渲染，不具有裁剪效果（性能更高）。<br/>
   * 2. 设置rect的x,y属性均能实现区域滚动效果，但scrollRect会保持0,0点位置不变。</p>
   * @default null
   */
  viewport?: engine.Rectangle;
  // createConchModel?(): any;
  /**
   * <p>指定是否对使用了 scrollRect 的显示对象进行优化处理。默认为false(不优化)。</p>
   * <p>当值为ture时：将对此对象使用了scrollRect 设定的显示区域以外的显示内容不进行渲染，以提高性能(如果子对象有旋转缩放或者中心点偏移，则显示筛选会不精确)。</p>
   */
  optimizeScrollRect?: boolean;
  /**@inheritDoc */
  // destroy?(destroyChild?: boolean): void;
  /**根据zOrder进行重新排序。*/
  // updateZOrder?(): void;
  /**
   * 指定显示对象是否缓存为静态图像。功能同cacheAs的normal模式。建议优先使用cacheAs代替。
   */
  cacheAsBitmap?: boolean;
  /**
   * 设置是否开启自定义渲染，只有开启自定义渲染，才能使用customRender函数渲染。
   */
  customRenderEnable?: boolean;
  /**
   * <p>指定显示对象是否缓存为静态图像，cacheAs时，子对象发生变化，会自动重新缓存，同时也可以手动调用reCache方法更新缓存。</p>
   * <p>建议把不经常变化的“复杂内容”缓存为静态图像，能极大提高渲染性能。cacheAs有"none"，"normal"和"bitmap"三个值可选。
   * <li>默认为"none"，不做任何缓存。</li>
   * <li>当值为"normal"时，canvas模式下进行画布缓存，webgl模式下进行命令缓存。</li>
   * <li>当值为"bitmap"时，canvas模式下进行依然是画布缓存，webgl模式下使用renderTarget缓存。</li></p>
   * <p>webgl下renderTarget缓存模式缺点：会额外创建renderTarget对象，增加内存开销，缓存面积有最大2048限制，不断重绘时会增加CPU开销。优点：大幅减少drawcall，渲染性能最高。
   * webgl下命令缓存模式缺点：只会减少节点遍历及命令组织，不会减少drawcall数，性能中等。优点：没有额外内存开销，无需renderTarget支持。</p>
   */
  cacheAs?: string;
  /**
   * 是否静态缓存此对象的当前帧的最终属性。为 true 时，子对象变化时不会自动更新缓存，但是可以通过调用 reCache 方法手动刷新。
   * <b>注意：</b> 1. 设置 cacheAs 为非空和非"none"时才有效。 2. 由于渲染的时机在脚本执行之后，也就是说当前帧渲染的是对象的最终属性，所以如果在当前帧渲染之前、设置静态缓存之后改变对象属性，则最终渲染结果表现的是对象的最终属性。
   */
  staticCache?: boolean;
  /**在设置cacheAs的情况下，调用此方法会重新刷新缓存。*/
  // reCache?(): void;
  /**表示显示对象相对于父容器的水平方向坐标值。*/
  x?: number;
  /**表示显示对象相对于父容器的垂直方向坐标值。*/
  y?: number;
  /**
   * <p>显示对象的宽度，单位为像素，默认为0。</p>
   * <p>此宽度用于鼠标碰撞检测，并不影响显示对象图像大小。需要对显示对象的图像进行缩放，请使用scale、scaleX、scaleY。</p>
   * <p>可以通过getbounds获取显示对象图像的实际宽度。</p>
   */
  width?: number;
  /**
   * <p>显示对象的高度，单位为像素，默认为0。</p>
   * <p>此高度用于鼠标碰撞检测，并不影响显示对象图像大小。需要对显示对象的图像进行缩放，请使用scale、scaleX、scaleY。</p>
   * <p>可以通过getbounds获取显示对象图像的实际高度。</p>
   */
  height?: number;
  /**
   * <p>设置对象在自身坐标系下的边界范围。与 <code>getSelfBounds</code> 对应。当 autoSize==true 时，会影响对象宽高。设置后，当需要获取自身边界范围时，就不再需要计算，合理使用能提高性能。比如 <code>getBounds</code> 会优先使用 <code>setBounds</code> 指定的值，如果没有指定则进行计算，此计算会对性能消耗比较大。</p>
   * <p><b>注意：</b> <code>setBounds</code> 与 <code>getBounds</code> 并非对应相等关系， <code>getBounds</code> 获取的是本对象在父容器坐标系下的边界范围，通过设置 <code>setBounds</code> 会影响 <code>getBounds</code> 的结果。</p>
   * @param	bound bounds矩形区域
   */
  // setBounds?(bound: engine.Rectangle): void;
  /**
   * <p>获取本对象在父容器坐标系的矩形显示区域。</p>
   * <p><b>注意：</b> 1.计算量较大，尽量少用，如果需要频繁使用，可以通过手动设置 <code>setBounds</code> 来缓存自身边界信息，从而避免比较消耗性能的计算。2. <code>setBounds</code> 与 <code>getBounds</code> 并非对应相等关系， <code>getBounds</code> 获取的是本对象在父容器坐标系下的边界范围，通过设置 <code>setBounds</code> 会影响 <code>getBounds</code> 的结果。</p>
   * @return 矩形区域。
   */
  // getBounds?(): engine.Rectangle;
  /**
   * 获取对象在自身坐标系的边界范围。与 <code>setBounds</code> 对应。
   * <p><b>注意：</b>计算量较大，尽量少用，如果需要频繁使用，可以提前手动设置 <code>setBounds</code> 来缓存自身边界信息，从而避免比较消耗性能的计算。</p>
   * @return 矩形区域。
   */
  // getSelfBounds?(): engine.Rectangle;
  /**
   * @private
   * 获取本对象在父容器坐标系的显示区域多边形顶点列表。
   * 当显示对象链中有旋转时，返回多边形顶点列表，无旋转时返回矩形的四个顶点。
   * @param ifRotate	（可选）之前的对象链中是否有旋转。
   * @return 顶点列表。结构：[x1,y1,x2,y2,x3,y3,...]。
   */
  // _boundPointsToParent?(ifRotate?: boolean): Array<any>;
  /**
   * 返回此实例中的绘图对象（ <code>Graphics</code> ）的显示区域，不包括子对象。
   * @param realSize	（可选）使用图片的真实大小，默认为false
   * @return 一个 Rectangle 对象，表示获取到的显示区域。
   */
  // getGraphicBounds?(realSize?: boolean): engine.Rectangle;
  /**
   * @private
   * 获取自己坐标系的显示区域多边形顶点列表
   * @param ifRotate	（可选）当前的显示对象链是否由旋转
   * @return 顶点列表。结构：[x1,y1,x2,y2,x3,y3,...]。
   */
  // _getBoundPointsM?(ifRotate?: boolean): Array<any>;
  /**
   * @private
   * 获取样式。
   * @return  样式 Style 。
   */
  // getStyle?(): engine.Style;
  /**
   * @private
   * 设置样式。
   * @param	value 样式。
   */
  // setStyle?(value: engine.Style): void;
  /**X轴缩放值，默认值为1。设置为负数，可以实现水平反转效果，比如scaleX=-1。*/
  scaleX?: number;
  /**Y轴缩放值，默认值为1。设置为负数，可以实现垂直反转效果，比如scaleX=-1。*/
  scaleY?: number;
  /**旋转角度，默认值为0。以角度为单位。*/
  rotation?: number;
  /**水平倾斜角度，默认值为0。以角度为单位。*/
  skewX?: number;
  /**垂直倾斜角度，默认值为0。以角度为单位。*/
  skewY?: number;
  /**
   * <p>对象的矩阵信息。通过设置矩阵可以实现节点旋转，缩放，位移效果。</p>
   * <p>矩阵更多信息请参考 <code>Matrix</code></p>
   */
  transform?: engine.Matrix;
  /**X轴 轴心点的位置，单位为像素，默认为0。轴心点会影响对象位置，缩放中心，旋转中心。*/
  pivotX?: number;
  /**Y轴 轴心点的位置，单位为像素，默认为0。轴心点会影响对象位置，缩放中心，旋转中心。*/
  pivotY?: number;
  /**透明度，值为0-1，默认值为1，表示不透明。更改alpha值会影响drawcall。*/
  alpha?: number;
  /**表示是否可见，默认为true。如果设置不可见，节点将不被渲染。*/
  visible?: boolean;
  /**指定要使用的混合模式。目前只支持"lighter"。*/
  blendMode?: string;
  /**绘图对象。封装了绘制位图和矢量图的接口，Sprite所有的绘图操作都通过Graphics来实现的。*/
  graphics?: engine.Graphics;
  /**
   * <p>显示对象的滚动矩形范围，具有裁剪效果(如果只想限制子对象渲染区域，请使用viewport)，设置optimizeScrollRect=true，可以优化裁剪区域外的内容不进行渲染。</p>
   * <p> srollRect和viewport的区别：<br/>
   * 1.srollRect自带裁剪效果，viewport只影响子对象渲染是否渲染，不具有裁剪效果（性能更高）。<br/>
   * 2.设置rect的x,y属性均能实现区域滚动效果，但scrollRect会保持0,0点位置不变。</p>
   */
  scrollRect?: engine.Rectangle;
  /**
   * <p>设置坐标位置。相当于分别设置x和y属性。</p>
   * <p>因为返回值为Sprite对象本身，所以可以使用如下语法：spr.pos(...).scale(...);</p>
   * @param	x			X轴坐标。
   * @param	y			Y轴坐标。
   * @param 	speedMode	（可选）是否极速模式，正常是调用this.x=value进行赋值，极速模式直接调用内部函数处理，如果未重写x,y属性，建议设置为急速模式性能更高。
   * @return	返回对象本身。
   */
  // pos?(x: number, y: number, speedMode?: boolean): engine.Sprite;
  /**
   * <p>设置轴心点。相当于分别设置pivotX和pivotY属性。</p>
   * <p>因为返回值为Sprite对象本身，所以可以使用如下语法：spr.pivot(...).pos(...);</p>
   * @param	x X轴心点。
   * @param	y Y轴心点。
   * @return	返回对象本身。
   */
  // pivot?(x: number, y: number): engine.Sprite;
  /**
   * <p>设置宽高。相当于分别设置width和height属性。</p>
   * <p>因为返回值为Sprite对象本身，所以可以使用如下语法：spr.size(...).pos(...);</p>
   * @param	width 宽度值。
   * @param	hegiht 高度值。
   * @return	返回对象本身。
   */
  // size?(width: number, height: number): engine.Sprite;
  /**
   * <p>设置缩放。相当于分别设置scaleX和scaleY属性。</p>
   * <p>因为返回值为Sprite对象本身，所以可以使用如下语法：spr.scale(...).pos(...);</p>
   * @param	scaleX		X轴缩放比例。
   * @param	scaleY		Y轴缩放比例。
   * @param 	speedMode	（可选）是否极速模式，正常是调用this.scaleX=value进行赋值，极速模式直接调用内部函数处理，如果未重写scaleX,scaleY属性，建议设置为急速模式性能更高。
   * @return	返回对象本身。
   */
  // scale?(scaleX: number, scaleY: number, speedMode?: boolean): engine.Sprite;
  /**
   * <p>设置倾斜角度。相当于分别设置skewX和skewY属性。</p>
   * <p>因为返回值为Sprite对象本身，所以可以使用如下语法：spr.skew(...).pos(...);</p>
   * @param	skewX 水平倾斜角度。
   * @param	skewY 垂直倾斜角度。
   * @return	返回对象本身
   */
  // skew?(skewX: number, skewY: number): engine.Sprite;
  /**
   * 更新、呈现显示对象。由系统调用。
   * @param	context 渲染的上下文引用。
   * @param	x X轴坐标。
   * @param	y Y轴坐标。
   */
  // render?(context: engine.RenderContext, x: number, y: number): void;
  /**
   * <p>绘制 当前<code>Sprite</code> 到 <code>Canvas</code> 上，并返回一个HtmlCanvas。</p>
   * <p>绘制的结果可以当作图片源，再次绘制到其他Sprite里面，示例：</p>
   *
   * var htmlCanvas:HTMLCanvas = sprite.drawToCanvas(100, 100, 0, 0);//把精灵绘制到canvas上面
   * var texture:Texture = new Texture(htmlCanvas);//使用htmlCanvas创建Texture
   * var sp:Sprite = new Sprite().pos(0, 200);//创建精灵并把它放倒200位置
   * sp.graphics.drawTexture(texture);//把截图绘制到精灵上
   * Laya.stage.addChild(sp);//把精灵显示到舞台
   *
   * <p>也可以获取原始图片数据，分享到网上，从而实现截图效果，示例：</p>
   *
   * var htmlCanvas:HTMLCanvas = sprite.drawToCanvas(100, 100, 0, 0);//把精灵绘制到canvas上面
   *
   * htmlCanvas.toBase64("image/png",0.92,function(base64)
   * 						trace(base64);//打印图片base64信息，可以发给服务器或者保存为图片
   * 						});
   *
   * @param	canvasWidth 画布宽度。
   * @param	canvasHeight 画布高度。
   * @param	x 绘制的 X 轴偏移量。
   * @param	y 绘制的 Y 轴偏移量。
   * @return  HTMLCanvas 对象。
   */
  // drawToCanvas?(
  //   canvasWidth: number,
  //   canvasHeight: number,
  //   offsetX: number,
  //   offsetY: number,
  // ): engine.HTMLCanvas;
  /**
   * <p>自定义更新、呈现显示对象。一般用来扩展渲染模式，请合理使用，可能会导致在加速器上无法渲染。</p>
   * <p><b>注意</b>不要在此函数内增加或删除树节点，否则会对树节点遍历造成影响。</p>
   * @param	context  渲染的上下文引用。
   * @param	x X轴坐标。
   * @param	y Y轴坐标。
   */
  // customRender?(context: engine.RenderContext, x: number, y: number): void;
  /**
   * @private
   * 应用滤镜。
   */
  /**滤镜集合。可以设置多个滤镜组合。*/
  filters?: Array<any>;
  /**
   * 把本地坐标转换为相对stage的全局坐标。
   * @param point				本地坐标点。
   * @param createNewPoint	（可选）是否创建一个新的Point对象作为返回值，默认为false，使用输入的point对象返回，减少对象创建开销。
   * @return 转换后的坐标的点。
   */
  // localToGlobal?(point: engine.Point, createNewPoint?: boolean): engine.Point;
  /**
   * 把stage的全局坐标转换为本地坐标。
   * @param point				全局坐标点。
   * @param createNewPoint	（可选）是否创建一个新的Point对象作为返回值，默认为false，使用输入的point对象返回，减少对象创建开销。
   * @return 转换后的坐标的点。
   */
  // globalToLocal?(point: engine.Point, createNewPoint?: boolean): engine.Point;
  /**
   * 将本地坐标系坐标转转换到父容器坐标系。
   * @param point 本地坐标点。
   * @return  转换后的点。
   */
  // toParentPoint?(point: engine.Point): engine.Point;
  /**
   * 将父容器坐标系坐标转换到本地坐标系。
   * @param point 父容器坐标点。
   * @return  转换后的点。
   */
  // fromParentPoint?(point: engine.Point): engine.Point;
  /**
   * <p>增加事件侦听器，以使侦听器能够接收事件通知。</p>
   * <p>如果侦听鼠标事件，则会自动设置自己和父亲节点的属性 mouseEnabled 的值为 true(如果父节点mouseEnabled=false，则停止设置父节点mouseEnabled属性)。</p>
   * @param type		事件的类型。
   * @param caller	事件侦听函数的执行域。
   * @param listener	事件侦听函数。
   * @param args		（可选）事件侦听函数的回调参数。
   * @return 此 EventDispatcher 对象。
   */
  // on?(
  //   type: string,
  //   caller: any,
  //   listener: Function,
  //   args?: Array<any>,
  // ): engine.EventDispatcher;
  /**
   * <p>增加事件侦听器，以使侦听器能够接收事件通知，此侦听事件响应一次后则自动移除侦听。</p>
   * <p>如果侦听鼠标事件，则会自动设置自己和父亲节点的属性 mouseEnabled 的值为 true(如果父节点mouseEnabled=false，则停止设置父节点mouseEnabled属性)。</p>
   * @param type		事件的类型。
   * @param caller	事件侦听函数的执行域。
   * @param listener	事件侦听函数。
   * @param args		（可选）事件侦听函数的回调参数。
   * @return 此 EventDispatcher 对象。
   */
  // once?(
  //   type: string,
  //   caller: any,
  //   listener: Function,
  //   args?: Array<any>,
  // ): engine.EventDispatcher;
  // parent?: engine.Node;
  /**
   * <p>加载并显示一个图片。功能等同于graphics.loadImage方法。支持异步加载。</p>
   * <p>注意：多次调用loadImage绘制不同的图片，会同时显示。</p>
   * @param url		图片地址。
   * @param x			（可选）显示图片的x位置。
   * @param y			（可选）显示图片的y位置。
   * @param width		（可选）显示图片的宽度，设置为0表示使用图片默认宽度。
   * @param height	（可选）显示图片的高度，设置为0表示使用图片默认高度。
   * @param complete	（可选）加载完成回调。
   * @return	返回精灵对象本身。
   */
  // loadImage?(
  //   url: string,
  //   x?: number,
  //   y?: number,
  //   width?: number,
  //   height?: number,
  //   complete?: engine.Handler,
  // ): engine.Sprite;
  /**
   * 根据图片地址创建一个新的 <code>Sprite</code> 对象用于加载并显示此图片。
   * @param	url 图片地址。
   * @return	返回新的 <code>Sprite</code> 对象。
   */
  // fromImage?(url: string): engine.Sprite;
  /**cacheAs后，设置自己和父对象缓存失效。*/
  // repaint?(): void;
  /**cacheAs时，设置所有父对象缓存失效。 */
  // parentRepaint?(): void;
  /**对舞台 <code>stage</code> 的引用。*/
  readonly stage?: engine.Stage;
  /**
   * <p>可以设置一个Rectangle区域作为点击区域，或者设置一个<code>HitArea</code>实例作为点击区域，HitArea内可以设置可点击和不可点击区域。</p>
   * <p>如果不设置hitArea，则根据宽高形成的区域进行碰撞。</p>
   */
  hitArea?: any;
  /**
   * <p>遮罩，可以设置一个对象(支持位图和矢量图)，根据对象形状进行遮罩显示。</p>
   * <p>【注意】遮罩对象坐标系是相对遮罩对象本身的，和Flash机制不同</p>
   */
  mask?: engine.Sprite;
  /**
   * 是否接受鼠标事件。
   * 默认为false，如果监听鼠标事件，则会自动设置本对象及父节点的属性 mouseEnable 的值都为 true（如果父节点手动设置为false，则不会更改）。
   * */
  mouseEnabled?: boolean;
  /**
   * 开始拖动此对象。
   * @param area				（可选）拖动区域，此区域为当前对象注册点活动区域（不包括对象宽高），可选。
   * @param hasInertia		（可选）鼠标松开后，是否还惯性滑动，默认为false，可选。
   * @param elasticDistance	（可选）橡皮筋效果的距离值，0为无橡皮筋效果，默认为0，可选。
   * @param elasticBackTime	（可选）橡皮筋回弹时间，单位为毫秒，默认为300毫秒，可选。
   * @param data				（可选）拖动事件携带的数据，可选。
   * @param disableMouseEvent	（可选）禁用其他对象的鼠标检测，默认为false，设置为true能提高性能。
   * @param ratio				（可选）惯性阻尼系数，影响惯性力度和时长。
   */
  // startDrag?(
  //   area?: engine.Rectangle,
  //   hasInertia?: boolean,
  //   elasticDistance?: number,
  //   elasticBackTime?: number,
  //   data?: any,
  //   disableMouseEvent?: boolean,
  //   ratio?: number,
  // ): void;
  /**停止拖动此对象。*/
  // stopDrag?(): void;
  /**
   * 检测某个点是否在此对象内。
   * @param	x 全局x坐标。
   * @param	y 全局y坐标。
   * @return  表示是否在对象内。
   */
  // hitTestPoint?(x: number, y: number): boolean;
  /**获得相对于本对象上的鼠标坐标信息。*/
  // getMousePoint?(): engine.Point;
  /**
   * 获得相对于stage的全局X轴缩放值（会叠加父亲节点的缩放值）。
   */
  readonly globalScaleX?: number;
  /**
   * 获得相对于stage的全局Y轴缩放值（会叠加父亲节点的缩放值）。
   */
  readonly globalScaleY?: number;
  /**
   * 返回鼠标在此对象坐标系上的 X 轴坐标信息。
   */
  readonly mouseX?: number;
  /**
   * 返回鼠标在此对象坐标系上的 Y 轴坐标信息。
   */
  readonly mouseY?: number;
  /**z排序，更改此值，则会按照值的大小对同一容器的所有对象重新排序。值越大，越靠上。默认为0，则根据添加顺序排序。*/
  zOrder?: number;
  /**设置一个Texture实例，并显示此图片（如果之前有其他绘制，则会被清除掉）。等同于graphics.clear();graphics.drawTexture()*/
  // texture?: engine.Texture;
}
