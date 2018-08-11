import engine from '../engine';

export default interface INode {
  NOTICE_DISPLAY?: number;
  MOUSEENABLE?: number;
  conchModel?: any;
  /**节点名称。*/
  name?: string;
  /**时间控制器，默认为Laya.timer。*/
  timer?: engine.Timer;
  /**
   * [只读]是否已经销毁。对象销毁后不能再使用。
   * @return
   */
  readonly destroyed?: boolean;
  /**
   * <p>增加事件侦听器，以使侦听器能够接收事件通知。</p>
   * <p>如果侦听鼠标事件，则会自动设置自己和父亲节点的属性 mouseEnabled 的值为 true(如果父节点mouseEnabled=false，则停止设置父节点mouseEnabled属性)。</p>
   * @param	type		事件的类型。
   * @param	caller		事件侦听函数的执行域。
   * @param	listener	事件侦听函数。
   * @param	args		（可选）事件侦听函数的回调参数。
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
   * @param	type		事件的类型。
   * @param	caller		事件侦听函数的执行域。
   * @param	listener	事件侦听函数。
   * @param	args		（可选）事件侦听函数的回调参数。
   * @return 此 EventDispatcher 对象。
   */
  // once?(
  //   type: string,
  //   caller: any,
  //   listener: Function,
  //   args?: Array<any>,
  // ): engine.EventDispatcher;
  // createConchModel?(): any;
  /**
   * <p>销毁此对象。destroy对象默认会把自己从父节点移除，并且清理自身引用关系，等待js自动垃圾回收机制回收。destroy后不能再使用。</p>
   * <p>destroy时会移除自身的事情监听，自身的timer监听，移除子对象及从父节点移除自己。</p>
   * @param destroyChild	（可选）是否同时销毁子节点，若值为true,则销毁子节点，否则不销毁子节点。
   */
  // destroy?(destroyChild?: boolean): void;
  /**
   * 销毁所有子对象，不销毁自己本身。
   */
  // destroyChildren?(): void;
  /**
   * 添加子节点。
   * @param	node 节点对象
   * @return	返回添加的节点
   */
  // addChild?(node: engine.Node): engine.Node;
  /**
   * 批量增加子节点
   * @param	...args 无数子节点。
   */
  // addChildren?(...args: any[]): void;
  /**
   * 添加子节点到指定的索引位置。
   * @param	node 节点对象。
   * @param	index 索引位置。
   * @return	返回添加的节点。
   */
  // addChildAt?(node: engine.Node, index: number): engine.Node;
  /**
   * 根据子节点对象，获取子节点的索引位置。
   * @param	node 子节点。
   * @return	子节点所在的索引位置。
   */
  // getChildIndex?(node: engine.Node): number;
  /**
   * 根据子节点的名字，获取子节点对象。
   * @param	name 子节点的名字。
   * @return	节点对象。
   */
  // getChildByName?(name: string): engine.Node;
  /**
   * 根据子节点的索引位置，获取子节点对象。
   * @param	index 索引位置
   * @return	子节点
   */
  // getChildAt?(index: number): engine.Node;
  /**
   * 设置子节点的索引位置。
   * @param	node 子节点。
   * @param	index 新的索引。
   * @return	返回子节点本身。
   */
  // setChildIndex?(node: engine.Node, index: number): engine.Node;
  /**
   * 删除子节点。
   * @param	node 子节点
   * @return	被删除的节点
   */
  // removeChild?(node: engine.Node): engine.Node;
  /**
   * 从父容器删除自己，如已经被删除不会抛出异常。
   * @return 当前节点（ Node ）对象。
   */
  // removeSelf?(): engine.Node;
  /**
   * 根据子节点名字删除对应的子节点对象，如果找不到不会抛出异常。
   * @param	name 对象名字。
   * @return 查找到的节点（ Node ）对象。
   */
  // removeChildByName?(name: string): engine.Node;
  /**
   * 根据子节点索引位置，删除对应的子节点对象。
   * @param	index 节点索引位置。
   * @return	被删除的节点。
   */
  // removeChildAt?(index: number): engine.Node;
  /**
   * 删除指定索引区间的所有子对象。
   * @param	beginIndex 开始索引。
   * @param	endIndex 结束索引。
   * @return 当前节点对象。
   */
  // removeChildren?(beginIndex?: number, endIndex?: number): engine.Node;
  /**
   * 替换子节点。
   * @internal 将传入的新节点对象替换到已有子节点索引位置处。
   * @param	newNode 新节点。
   * @param	oldNode 老节点。
   * @return	返回新节点。
   */
  // replaceChild?(newNode: engine.Node, oldNode: engine.Node): engine.Node;
  /**
   * 子对象数量。
   */
  readonly numChildren?: number;
  /**父节点。*/
  parent?: engine.Node;
  /**表示是否在显示列表中显示。*/
  readonly displayedInStage?: boolean;
  /**
   * 当前容器是否包含指定的 <code>Node</code> 节点对象 。
   * @param	node  指定的 <code>Node</code> 节点对象 。
   * @return	一个布尔值表示是否包含指定的 <code>Node</code> 节点对象 。
   */
  // contains?(node: engine.Node): boolean;
  /**
   * 定时重复执行某函数。功能同Laya.timer.timerLoop()。
   * @param	delay		间隔时间(单位毫秒)。
   * @param	caller		执行域(this)。
   * @param	method		结束时的回调方法。
   * @param	args		（可选）回调参数。
   * @param	coverBefore	（可选）是否覆盖之前的延迟执行，默认为true。
   * @param	jumpFrame 时钟是否跳帧。基于时间的循环回调，单位时间间隔内，如能执行多次回调，出于性能考虑，引擎默认只执行一次，设置jumpFrame=true后，则回调会连续执行多次
   */
  // timerLoop?(
  //   delay: number,
  //   caller: any,
  //   method: Function,
  //   args?: Array<any>,
  //   coverBefore?: boolean,
  //   jumpFrame?: boolean,
  // ): void;
  /**
   * 定时执行某函数一次。功能同Laya.timer.timerOnce()。
   * @param	delay		延迟时间(单位毫秒)。
   * @param	caller		执行域(this)。
   * @param	method		结束时的回调方法。
   * @param	args		（可选）回调参数。
   * @param	coverBefore	（可选）是否覆盖之前的延迟执行，默认为true。
   */
  // timerOnce?(
  //   delay: number,
  //   caller: any,
  //   method: Function,
  //   args?: Array<any>,
  //   coverBefore?: boolean,
  // ): void;
  /**
   * 定时重复执行某函数(基于帧率)。功能同Laya.timer.frameLoop()。
   * @param	delay		间隔几帧(单位为帧)。
   * @param	caller		执行域(this)。
   * @param	method		结束时的回调方法。
   * @param	args		（可选）回调参数。
   * @param	coverBefore	（可选）是否覆盖之前的延迟执行，默认为true。
   */
  // frameLoop?(
  //   delay: number,
  //   caller: any,
  //   method: Function,
  //   args?: Array<any>,
  //   coverBefore?: boolean,
  // ): void;
  /**
   * 定时执行一次某函数(基于帧率)。功能同Laya.timer.frameOnce()。
   * @param	delay		延迟几帧(单位为帧)。
   * @param	caller		执行域(this)
   * @param	method		结束时的回调方法
   * @param	args		（可选）回调参数
   * @param	coverBefore	（可选）是否覆盖之前的延迟执行，默认为true
   */
  // frameOnce?(
  //   delay: number,
  //   caller: any,
  //   method: Function,
  //   args?: Array<any>,
  //   coverBefore?: boolean,
  // ): void;
  /**
   * 清理定时器。功能同Laya.timer.clearTimer()。
   * @param	caller 执行域(this)。
   * @param	method 结束时的回调方法。
   */
  // clearTimer?(caller: any, method: Function): void;
}
