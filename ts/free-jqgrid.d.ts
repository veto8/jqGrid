/// <reference path="jquery.d.ts" />

declare namespace FreeJqGrid {
	interface GridInfo {
		bDiv: HTMLDivElement;
		cDiv: HTMLDivElement;
		cols: HTMLCollection | HTMLTableDataCellElement[];     // td[]
		eDiv: HTMLDivElement;
		fbDiv?: JQuery;
		fbRows?: HTMLCollection | HTMLTableRowElement[];       // tr[]
		fhDiv?: JQuery;
		footers?: HTMLCollection | HTMLTableDataCellElement[]; // td[]
		fsDiv?: JQuery;
		hDiv: HTMLDivElement;
		//headers: JqGridColumnHeaderInfo[];
		headers: { el: HTMLTableHeaderCellElement; width: number; }[];
		newWidth?: number;
		sDiv?: HTMLDivElement;
		topDiv?: HTMLDivElement;
		ubDiv?: HTMLDivElement;
		uDiv?: HTMLDivElement;
		width: number;
	}
	interface BodyTable extends HTMLTableElement {
		p: any;
		grid: GridInfo;
		ftoolbar?: boolean;
		nav?: boolean;
		addJSONData(this: BodyTable, data: any[], rcnt?: number, more?: boolean, adjust?: number): void;
		addXmlData(this: BodyTable, data: any[], rcnt?: number, more?: boolean, adjust?: number): void;
		clearToolbar?(trigger: boolean): void;
		constructTr(id: string, hide: boolean, spaceSeparatedCssClasses: string, rd: any, cur: any, selected: boolean): string;
		fixScrollOffsetAndhBoxPadding(this: BodyTable): void;
		formatCol(pos: number, rowInd: number, tv: string, rawObject: any, rowId: string, rdata?: any): string;
		formatter(rowId: string, cellval: any, colpos: number, rwdat: any, act?: "add" | "edit", rdata?: any): string;
		modalAlert?(): any;
		rebuildRowIndexes(this: BodyTable): void;
		refreshIndex(): void;
		setHeadCheckBox(this: BodyTable, checked: boolean): void;
		sortData(this: BodyTable, index: string, idxcol: number, reload: boolean, sor: string, obj: HTMLTableHeaderCellElement): void;
		toogleToolbar?(): void;
		triggerToolbar?(): void;
		updatepager(this: BodyTable, rn: boolean, dnd: boolean): void;
	}
	interface JQueryJqGrid extends JQuery {
		[index: number]: BodyTable;
	}
	interface QueryObject {
		ignoreCase(): QueryObject;
		useCase(): QueryObject;
		trim(): QueryObject;
		noTrim(): QueryObject;
		execute(): QueryObject;
		data(): QueryObject;
		select(f?: (v: any) => any): QueryObject;
		hasMatch(): QueryObject;
		andNot(f: string, v: any, x: any): QueryObject;
		orNot(f: string, v: any, x: any): QueryObject;
		not(f: string, v: any, x: any): QueryObject;
		and(f: string, v: any, x: any): QueryObject;
		or(f: string, v: any, x: any): QueryObject;
		orBegin(): QueryObject;
		orEnd(): QueryObject;
		isNot(f: string): QueryObject;
		is(f: string): QueryObject;
		equals(f: string, v: any, t: any): QueryObject;
		notEquals(f: string, v: any, t: any): QueryObject;
		isNull(f: string, v: any, t: any): QueryObject;
		greater(f: string, v: any, t: any): QueryObject;
		less(f: string, v: any, t: any): QueryObject;
		greaterOrEquals(f: string, v: any, t: any): QueryObject;
		lessOrEquals(f: string, v: any, t: any): QueryObject;
		startsWith(f: string, v: any): QueryObject;
		endsWith(f: string, v: any): QueryObject;
		contains(f: string, v: any): QueryObject;
		groupBy(by: string, dir: "a" | "asc" | "ascending" | "d" | "desc" | "descending", type: "text" | "int" | "integer" | "float" | "number" | "currency" | "numeric" | "date" | "datetime" | ((value: string) => string), datefmt: string): any[];
		orderBy(by: string, dir: "a" | "asc" | "ascending" | "d" | "desc" | "descending", type: "text" | "int" | "integer" | "float" | "number" | "currency" | "numeric" | "date" | "datetime" | ((value: string) => string), datefmt: string, sfunc?: (a: any, b: any, direction: 1 | -1, aItem: any, bItem: any) => any): any[];
		inSet(f: string, v: any, t: any): QueryObject;
		custom(ruleOp: string, field: string, data: any): QueryObject;
	}
	enum ComponentName {
		GridBoxDiv = 0,                   // tagName: "div". class: "ui-jqgrid". Id: "gbox_" + gridId
		GridOverlayDiv = 1,               // tagName: "div". class: "jqgrid-overlay". Id: "lui_" + gridId
		LoadingDiv = 2,                   // tagName: "div". class: "loading". Id: "load_" + gridId
		DialogAlertDiv = 3,               // tagName: "div". class: "ui-jqdialog". Id: "alertmod_" + gridId
		DialogSearchDiv = 4,              // tagName: "div". class: "ui-jqdialog". Id: "searchmodfbox_" + gridId
		DialogViewDiv = 5,                // tagName: "div". class: "ui-jqdialog". Id: "viewmod" + gridId
		DialogEditDiv = 6,                // tagName: "div". class: "ui-jqdialog". Id: "editmod" + gridId
		DialogDeleteDiv = 7,              // tagName: "div". class: "ui-jqdialog". Id: "delmod" + gridId
		GridViewDiv = 8,                  // tagName: "div". class: "ui-jqgrid-view". Id: "gview_" + gridId
		TitleBarDiv = 9,                  // tagName: "div". class: "ui-jqgrid-titlebar" and either "ui-jqgrid-caption" or "ui-jqgrid-caption-rtl"
		UpperToolbarDiv = 10,             // tagName: "div". class: "ui-userdata". Id: "tb_" + gridId
		TopPagerDiv = 11,                 // tagName: "div". class: "ui-jqgrid-toppager". Id: gridId + "_toppager"
		HeaderDiv = 12,                   // tagName: "div". class: "ui-jqgrid-hdiv"
		HeaderBoxDiv = 13,                // tagName: "div". class: either "ui-jqgrid-hdiv" or "ui-jqgrid-hbox-rtl"
		HeaderTable = 14,                 // tagName: "table". class: "ui-jqgrid-htable"
		HeaderColsRow = 15,               // tagName: "tr". class: "jqgfirstrow" or the row with column headers
		HeaderCols = 16,                  // tagName: "th". class: either "ui-first-th-rtl" or "ui-first-th-rtl"
		HeaderRows = 47,                  // tagName: "tr". class: "ui-jqgrid-labels"
		HeaderTh = 48,                    // tagName: "th". class: "ui-th-column" and either "ui-th-ltr" or "ui-th-rtl"
		HeaderSortableDiv = 49,           // tagName: "div". class: "ui-jqgrid-labels"
		HeaderResizableSpan = 50,         // tagName: "span". class: "ui-jqgrid-resize" and either "ui-jqgrid-resize-ltr" or "ui-jqgrid-resize-rtl"
		HeaderSelectAllRowsCheckbox = 45, // tagName: "input" (can be changed to "button" in the future). class: "cbox". Id: "cb_" + gridId
		SearchToolbar = 17,               // tagName: "tr". class: "ui-search-toolbar". Its direct children are th having class "ui-th-column" and optionally "ui-th-rtl"
		BodyDiv = 18,                     // tagName: "div". class: "ui-jqgrid-bdiv"
		BodyScrollFullDiv = 19,           // tagName: "div" - It can have height CSS property which simulate the total size of virtual data.
		BodyScrollTopDiv = 20,            // tagName: "div" - It can have height CSS property which simulate virtual data before the current displayed in btable.
		BodyTable = 21,                   // tagName: "table". class: "ui-jqgrid-btable". Id: gridId
		Grid = 21,                        // tagName: "table". class: "ui-jqgrid-btable". Id: gridId
		BodyColsRow = 22,                 // tagName: "tr". class: "jqgfirstrow"
		BodyCols = 23,                    // tagName: "td"
		BodyDataRows = 24,                // tagName: "tr". class: "jqgrow" and optionally "ui-row-rtl"
		FooterDiv = 25,                   // tagName: "div". class: "ui-jqgrid-sdiv"
		FooterBoxDiv = 26,                // tagName: "div". class: either "ui-jqgrid-hdiv" or "ui-jqgrid-hbox-rtl". ??? is it really needed ???
		FooterTable = 27,                 // tagName: "table". class: "ui-jqgrid-ftable"
		FooterRows = 28,                  // tagName: "tr". class: "footrow", optionally additionally "footrow-rtl"
		BottomToolbarDiv = 29,            // tagName: "div". class: "ui-userdata". Id: "tb_" + gridId
		FrozenHeaderDiv = 30,             // tagName: "div". class: "frozen-div" and "ui-jqgrid-hdiv"
		FrozenHeaderTable = 31,           // tagName: "table". class: "ui-jqgrid-htable"
		FrozenHeaderColsRow = 32,         // tagName: "tr". class: "jqgfirstrow"
		FrozenHeaderCols = 33,            // tagName: "th". class: either "ui-first-th-rtl" or "ui-first-th-rtl"
		FrozenSearchToolbar = 34,         // tagName: "tr". class: "ui-search-toolbar". Its direct children are th having class "ui-th-column" and optionally "ui-th-rtl"
		FrozenFooterDiv = 35,             // tagName: "div". class: "frozen-div" and "ui-jqgrid-sdiv"
		FrozenFooterTable = 36,           // tagName: "table". class: "ui-jqgrid-ftable"
		FrozenFooterDataRows = 37,        // tagName: "tr". class: "footrow", optionally additionally "footrow-rtl"
		FrozenBobyDiv = 38,               // tagName: "div". class: "frozen-div" and "ui-jqgrid-bdiv"
		FrozenBobyTable = 39,             // tagName: "table". class: "ui-jqgrid-btable". Id: gridId + "_frozen"
		FrozenBobyColsRow = 40,           // tagName: "tr". class: "jqgfirstrow"
		FrozenBobyCols = 41,              // tagName: "td"
		FrozenBobyDataRows = 42,          // tagName: "tr". class: "jqgrow" and optionally "ui-row-rtl"
		ColumnResizerDiv = 43,            // tagName: "div". class: "ui-jqgrid-resize-mark". Id: "rs_m" + gridId
		BottomPagerDiv = 44,              // tagName: "div". class: "ui-jqgrid-pager"
		SearchOperationMenuUl = 46
	}
	// The ModalHash represent internal structure used by jqModal - Minimalist Modaling with jQuery (see jqmodal.js)
	interface ModalHash {
		w: JQuery;  // The modal element, represent the outer div of the modal dialog
		o: JQuery;  // The overlay element. It will be assigned on the first opening of the modal
		c: Object;  // The modal's options object. The options used durin creating the modal. One can use global $.jgrid.jqModal or gris specifif p.jqModal to specify defaults of the options.
		t: Element; // The triggering element
		s: number;  // numeric part of "id" used for modal dialog. The modal dialog have class "jqmID" + s.
		a: boolean; // It's false initially. It will be set to true during opening and will set to false on closing.
	}
	interface DeleteFormLocaleOptions {
		bCancel?: string;
		bSubmit?: string;
		caption?: string;
		msg?: string;
		[propName: string]: any;
	}
	interface EditFormLocaleOptions {
		addCaption?: string;
		bCancel?: string;
		bClose?: string;
		bExit?: string;
		bNo?: string;
		bSubmit?: string;
		bYes?: string;
		editCaption?: string;
		msg: { customarray?: string, customfcheck?: string, date?: string, email?: string, integer?: string, maxValue?: string, minValue?: string, novalue?: string, number?: string, required?: string, url?: string, [propName: string]: any };
		saveData?: string;
		[propName: string]: any;
	}
	interface NavLocaleOptions {
		addtext?: string;
		addtitle?: string;
		alertcap?: string;
		alerttext?: string;
		canceltext?: string;
		canceltitle?: string;
		deltext?: string;
		deltitle?: string;
		edittext?: string;
		edittitle?: string;
		refreshtext?: string;
		refreshtitle?: string;
		savetext?: string;
		savetitle?: string;
		searchtext?: string;
		searchtitle?: string;
		viewtext?: string;
		viewtitle?: string;
		[propName: string]: any;
	}
	interface SearchLocaleOptions {
		addGroupTitle?: string;
		addRuleTitle?: string;
		caption?: string;
		deleteGroupTitle?: string;
		deleteRuleTitle?: string;
		Find?: string;
		groupOps?: { op: string, text: string }[];
		odata?: { oper: string, text: string }[];
		operandTitle?: string;
		Reset?: string;
		resetTitle?: string;
		[propName: string]: any;
	}
	interface ViewLocaleOptions {
		bClose?: string;
		caption?: string;
		[propName: string]: any;
	}
	interface JqGridLocaleOptions {
		emptyrecords?: string;
		loadtext?: string;
		pgfirst?: string;
		pglast?: string;
		pgnext?: string;
		pgprev?: string;
		pgrecs?: string;
		pgtext?: string;
		recordtext?: string;
		savetext?: string;
		showhide?: string;
		[propName: string]: any;
	}
	interface FormatterIntegerLocaleOptions {
		thousandsSeparator?: string;
		defaultValue?: string;
	}
	interface FormatterNumberLocaleOptions extends FormatterIntegerLocaleOptions {
		decimalSeparator?: string;
		decimalPlaces?: number;
	}
	interface FormatterCurrencyLocaleOptions extends FormatterNumberLocaleOptions {
		prefix?: string;
		suffix?: string;
	}
	interface FormattersLocaleOptions {
		integer?: FormatterIntegerLocaleOptions;
		number?: FormatterNumberLocaleOptions;
		currency?: FormatterCurrencyLocaleOptions;
		date?: {
			dayNames?: string[];
			monthNames?: string[];
			AmPm?: string[];
			S?: (j: number) => string;
			srcformat?: string;
			newformat?: string;
			masks?: {
				ShortDate?: string;
				LongDate?: string;
				FullDateTime?: string;
				MonthDay?: string;
				ShortTime?: string;
				LongTime?: string;
				YearMonth?: string;
			}
		};
		[propName: string]: any;
	}
	interface JqGridStaticLocaleOptions {
		col?: {
			bCancel?: string;
			bSubmit?: string;
			caption?: string;
			[propName: string]: any;
		};
		defaults?: JqGridLocaleOptions;
		del?: DeleteFormLocaleOptions;
		edit?: EditFormLocaleOptions;
		errors?: {
			errcap?: string;
			model?: string;
			norecords?: string;
			nourl?: string;
			[propName: string]: any;
		};
		formatter?: FormattersLocaleOptions;
		isRTL?: boolean;
		nav?: NavLocaleOptions;
		search?: SearchLocaleOptions;
		view?: ViewLocaleOptions;
		[propName: string]: any;
	}
	interface EditableCellInfo {
		rowid: string;
		iCol: number;
		iRow: number;
		cmName: string;
		cm: any;
		mode: "add" | "edit";
		td: HTMLTableDataCellElement;
		tr: HTMLTableRowElement;
		trFrozen: HTMLTableRowElement;
		dataElement: Element;
		dataWidth: number;
	}
	interface JqGridStatic extends JqGridStaticLocaleOptions {
		_multiselect: boolean;
		ajaxOptions: JQueryAjaxSettings;
		cell_width: boolean;
		cellattr: { [key: string]: (rowId: string, cellValue: any, rowObject: any, cm: ColumnModel, rdata: any) => string; };
		cmTemplate: { [key: string]: ColumnModel; };
		defaults: { locale: string, [propName: string]: any };
		formatter: any;
		guid: number;
		guiStyles: any;
		icons: any;
		inlineEdit: any;
		jqModal: any; // { toTop: true }
		locales: { [key: string]: JqGridStaticLocaleOptions; };
		msie: boolean;
		nav: any;
		no_legacy_api: boolean;
		productName: "free jqGrid";
		search: any;
		uidPref: string;
		version: string; // like "4.13.7" for example
		view: any;
		bindEv(element: Element | JQuery, options: any): any;
		builderFmButon(id: string, text?: string, icon?: string, iconOnLeftOrRight?: "right" | "left", conner?: "right" | "left" | "default"): any;
		builderSortIcons(iCol: number): string;
		cellWidth(): boolean;
		checkDate(format: string, date: string): boolean;
		checkTime(time: string): boolean;
		checkValues(value: any, iCol: number | string, customobject?: any, name?: string, options?: any): boolean;
		clearArray(array: any[]): void;
		closeModal(h: ModalHash): void;
		convertOnSaveLocally(nData: any, cm: any, oData: any, rowid: string, item: any, iCol: number): any;
		createEl(elementType: string, options: any, value: string, autoWidth?: boolean, ajaxso?: any): Element;
		createModal(aIDs: any, content: Element | JQuery, o: any, insertSelector: string | Element | JQuery, posSelector: string | Element | JQuery, appendsel?: boolean | string | Element | JQuery, css?: any): void;
		//detectRowEditing(rowid: string): RowEditingInfo;
		detectRowEditing(rowid: string): { mode: "inlineEditing" | "cellEditing"; savedRow: any[]; };
		enumEditableCells(tr: HTMLTableRowElement, mode: "add" | "edit", callback: (options: EditableCellInfo) => boolean): void;
		extend(methods: any): void;
		feedback(this: BodyTable | JQuery, p: any, eventPrefix: string, callbackSuffix: string, callbackName: string): boolean;
		fillSelectOptions(element, value: any, separator: string, delimiter: string, isMultiple: boolean, valuesToSelect?: string): boolean;
		fixMaxHeightOfDiv(height: number): number;
		fixScrollOffsetAndhBoxPadding(this: BodyTable): void;
		format(format: string, ...rest: any[]): string;
		from(source: any): QueryObject;
		fullBoolFeedback(this: BodyTable, callback: (...rest: any[]) => false | "stop" | undefined, eventName: string, ...rest: any[]): boolean;
		getAccessor(obj: any, dotSeparatedNamesOrFunc: string | ((obj: any) => any)): any;
		getCell(this: BodyTable, tr: HTMLTableRowElement | JQuery, iCol: number): JQuery;
		getCellIndex(cell: Element | JQuery): number;
		getDataFieldOfCell(this: BodyTable, tr: HTMLTableRowElement | JQuery, iCol: number): JQuery;
		getEditedValue(this: BodyTable, $dataFiled: JQuery, cm: any, valueText: Object, editable: boolean | "hidden" | "readonly"): string;
		getGridComponent(componentName: ComponentName, $p: HTMLElement | JQuery): JQuery;
		getGridComponentId(componentName: ComponentName): string;
		getGridComponentIdSelector(componentName: ComponentName): string;
		getMethod(this: BodyTable, methodName: string): Function;
		getRelativeRect(element: Element | JQuery): JQueryCoordinates;
		getRes(basePath: Object, path: string): any;
		getXmlData(obj: Node, dotSeparatedNamesOrFunc: string | ((obj: any) => any), returnObj?: boolean): string;
		hasAllClasses(element: Element | JQuery, spaceSeparatedCssClasses: string): boolean;
		hasOneFromClasses(element: Element | JQuery, spaceSeparatedCssClasses: string): boolean;
		hideModal(selector: string | Element | JQuery, options: any): void;
		htmlDecode(value: string): string;
		htmlEncode(value: string): string;
		info_dialog(this: BodyTable, caption: string, content: string, closeButtonText: string, modalOptions: any): void;
		isCellClassHidden(spaceSeparatedCssClasses: string): boolean;
		isEmpty(testString: string): boolean;
		isHTMLElement(element: Element): boolean;
		jqID(idName: string): string;
		mergeCssClasses(...spaceSeparatedCssClasses: string[]): boolean;
		msiever(): number;
		oldDecodePostedData(value: string): string;
		oldEncodePostedData(value: string): string;
		parseDataToHtml(this: BodyTable, len: number, ids: string[], items: any[], cellsToDisplay: any[], rcnt?: number, adjust?: number, readAllInputData?: boolean): string[];
		parseDate(this: BodyTable, format: string, date: string | number | Date, newformat?: string, options?: any): string | Date;
		parseDateToNumber(this: BodyTable, format: string, date: string | number | Date): number;
		randId(prefix?: string): string;
		serializeFeedback(this: BodyTable | JQuery, callback: ((this: BodyTable | JQuery, postData: any) => any), eventName: string, postData: Object | string): any;
		showModal(h: ModalHash): void;
		stripHtml(htmlString: string): string;
		stripPref(prefix: string, id: string): string;
		template(format: string): string;
		viewModal(selector: string | Element | JQuery, options?: any): void;
		[propName: string]: any;
	}
	interface JqGridFmatter {
		isEmpty: (any) => boolean;
		isNumber: (any) => boolean;
		isObject: (any) => boolean;
		isValue: (any) => boolean;
		NumberFormat: (nData: number, opts: { decimalSeparator: string, decimalPlaces: number, thousandsSeparator: string }) => string;
	}
	interface JqGridFormatters {
		[propName: string]: any;
	}
	interface EditOptions {
		buildSelect: (this: BodyTable, data: any, jqXhr: JQueryXHR, cm: ColumnModel, iCol: number) => string;
		dataEvents?: { type: string, data?: any, fn: (e) => void }[]
		dataInit?: (this: BodyTable, element: Element, options: EditOptions) => void;
		dataUrl?: string | ((this: BodyTable, rowid: string, value: string, cmName: string, ajaxContext: { elem: Element, options: any, cm: ColumnModel, mode: "cell" | "addForm" | "editForm" | "add" | "edit", rowid: string, iCol: number, ovm: string[] }) => string);
		value?: string | { [propName: string]: string };
		[propName: string]: any; // attribute for the editable element
	}
	interface SearchOptions {
		[propName: string]: any;
	}
	interface ColumnModel {
		align?: "left" | "center" | "right";
		autoResizable?: boolean; // default value false
		autoResizing?: { minColWidth: number, maxColWidth: number, compact: boolean };
		cellattr?: "string" | ((rowId: string, cellValue: any, rowObject: any, cm: ColumnModel, rdata: any) => string);
		cellBuilder?: (this: BodyTable, cellValue: any, options: { rowId: string, colModel: ColumnModel, gid: string, pos: number, rowData: any }, rowObject: any, action?: "edit" | "add") => string;
		classes?: string; // spaceSeparatedCssClasses
		convertOnSave?: (this: BodyTable, options: { newValue: any, cm: ColumnModel, oldValue: any, id: string, item: any, iCol: number }) => any;
		datefmt?: string;
		editable?: boolean | "hidden" | "disabled" | "readonly" | ((options: { rowid: string, iCol: number, iRow: number, mode: "cell" | "addForm" | "editForm" | "add" | "edit", cmName: string, cm: ColumnModel, td?: HTMLTableDataCellElement, tr?: HTMLTableRowElement, trFrozen?: HTMLTableRowElement, dataElement?: Element, dataWidth?: number }) => boolean | "hidden" | "disabled" | "readonly"); // default value false
		editoptions?: EditOptions;
		editrules?: {
			edithidden?: boolean;
			required?: boolean;
			number?: boolean;
			integer?: boolean;
			minValue?: number;
			maxValue?: number;
			email?: boolean;
			url?: boolean;
			date?: boolean;
			time?: boolean;
			custom?: boolean | ((this: BodyTable, options: { oldValue: string, newValue: string, oldRowData?: any, rowid: string, iCol: number, iRow: number, mode: "cell" | "addForm" | "editForm" | "add" | "edit", cmName: string, cm: ColumnModel, td?: HTMLTableDataCellElement, tr?: HTMLTableRowElement }) => any[]);
			custom_func?: (this: BodyTable, value: string, name: string, iCol: number) => any[];
		};
		edittype?: "text" | "textarea" | "checkbox" | "select" | "password" | "button" | "image" | "file" | "custom";
		firstsortorder?: "asc" | "desc"; // default value "asc"
		fixed?: boolean; // default value false
		formatoptions?: any; // TODO: define formatoptions for different standard formatters
		formatter?: "integer" | "number" | "currency" | "date" | "select" | "actions" | "checkbox" | "checkboxFontAwesome4" | "showlink" | "email" | "link" | string | ((this: BodyTable, cellValue: any, options: { rowId: string, colModel: ColumnModel, gid: string, pos: number, rowData: any }, rowObject: any, action?: "edit" | "add") => string);
		formoptions?: {
			elmprefix?: string;
			elmsuffix?: string;
			label?: string;
			rowpos?: number;
			colpos?: number;
		};
		frozen?: boolean; // default value false
		jsonmap?: (item: any) => any;
		headerTitle?: string;
		hidden?: boolean; // default value false
		hidedlg?: boolean;
		index?: string;
		key?: boolean;
		label?: string;
		labelAlign?: "left" | "center" | "right" | "likeData";
		labelClasses?: string;
		lso?: "asc" | "desc" | "asc-desc" | "desc-asc" | "" | string;
		name: string;
		resizable?: boolean;
		saveLocally?: (this: BodyTable, options: { newValue: any, newItem: Object, oldItem: Object, id: string, cm: ColumnModel, cmName: string, iCol: number }) => void;
		search?: boolean;
		searchoptions?: SearchOptions;
		sortable?: boolean;
		sortfunc?: (a: any, b: any, direction: 1 | -1, aItem: any, bItem: any) => any;
		sortIconName?: string | ((this: BodyTable, order: "asc" | "desc", iCol: number, cm: ColumnModel) => string); //
		stype?: "select" | "checkbox" | "custom" | "text"; // default value "text"
		template?: "actions" | "integer" | "integerStr" | "number" | "numberStr" | "booleanCheckbox" | "booleanCheckboxFa" | string | ColumnModel;
		title?: boolean;
		unformat?: (this: BodyTable, cellValue: string, options: { rowId: string, colModel: ColumnModel }, dataElement: Element) => string;
		viewable?: boolean; // default value true
		width?: number; // default value 150
		widthOrg?: number; // used internally by jqGrid
		xmlmap?: (item: any) => any;
		[propName: string]: any; // allow to have any number of other properties
	}
	interface FormEditingOptions extends EditFormLocaleOptions {
		_savedData?: { [propName: string]: any };
		addedrow?: string;
		afterclickPgButtons?: (this: BodyTable, whichButton: "next" | "prev", $form: JQuery, rowid: string) => void;
		afterComplete?: (this: BodyTable, jqXhr: JQueryXHR, postdata: Object | string, $form: JQuery, editOrAdd: "edit" | "add") => void;
		afterShowForm?: (this: BodyTable, $form: JQuery, editOrAdd: "edit" | "add") => void;
		afterSubmit?: (this: BodyTable, jqXhr: JQueryXHR, postdata: Object | string, editOrAdd: "edit" | "add") => void;
		ajaxEditOptions?: JQueryAjaxSettings;
		beforeInitData?: (this: BodyTable, $form: JQuery, editOrAdd: "edit" | "add") => void;
		beforeShowForm?: (this: BodyTable, $form: JQuery, editOrAdd: "edit" | "add") => void;
		beforeSubmit?: (this: BodyTable, postdata: Object | string, $form: JQuery, editOrAdd: "edit" | "add") => void;
		bottominfo?: string;
		checkOnSubmit?: boolean;
		checkOnUpdate?: boolean;
		clearAfterAdd?: boolean;
		closeAfterEdit?: boolean;
		closeicon?: any[]; // [true,"left","fa fa-undo"]
		closeOnEscape?: boolean;
		commonIconClass?: string; // "fa"
		dataheight?: number | "auto" | "100%" | string; // "auto"
		datawidth?: number | "auto" | "100%" | string; // "auto"
		drag?: boolean;
		editData?: any;
		height?: number | "auto" | "100%" | string; // "auto"
		left?: number;
		mtype?: string; // "POST"
		navkeys?: any[]; // [false,38,40]
		nextIcon?: string; // "fa fa-caret-right"
		onclickPgButtons?: (this: BodyTable, whichButton: "next" | "prev", $form: JQuery, rowid: string) => void;
		onclickSubmit?: (this: BodyTable, options: FormEditingOptions, postdata: Object | string, editOrAdd: "edit" | "add") => Object | string;
		onClose?: (this: BodyTable, selector: string | Element | JQuery) => boolean;
		onInitializeForm?: (this: BodyTable, $form: JQuery, editOrAdd: "edit" | "add") => void;
		overlayClass?: string; // "ui-widget-overlay"
		prevIcon?: string; // "fa fa-caret-left"
		processing?: boolean;
		reloadAfterSubmit?: boolean;
		removemodal?: boolean;
		resize?: boolean;
		saveicon?: any[]; // [true,"left","fa fa-floppy-o"]
		savekey?: any[]; // [false,13]
		savetext?: string;
		saveui?: string; //"enable"
		serializeEditData?: (this: BodyTable, postdata: Object) => Object | string;
		skipPostTypes?: any[]; // ["image","file"]
		top?: number;
		topinfo?: string;
		url: string | ((this: BodyTable, rowid: string, editOrAdd: "edit" | "add", postdata: Object | string, options: FormEditingOptions) => string);
		viewPagerButtons?: boolean;
		width?: number | "auto" | "100%" | string; // "auto"
		[propName: string]: any; // allow to have any number of other properties
	}
	interface JqGridOptions {
		colModel: ColumnModel[];
		colNames?: string[];
		data?: any[];
		formEditing?: FormEditingOptions;
		onSelectRow?: (this: BodyTable, rowid: string, state: boolean, eventObject: JQueryEventObject) => void;
		[propName: string]: any; // allow to have any number of other properties
	}
}

interface JQueryStatic {
	jgrid: FreeJqGrid.JqGridStatic;
	fmatter: FreeJqGrid.JqGridFmatter;
	unformat: (element: Element | JQuery, options: { rowId: string, colModel: FreeJqGrid.ColumnModel }, iCol: number, content: boolean) => string;
	[propName: string]: any; // allow to have any number of other properties
}

interface JQuery {
	jqGrid(options: FreeJqGrid.JqGridOptions): FreeJqGrid.JQueryJqGrid;

	getGridParam?(parameterName?: string): any;
	jqGrid(methodName: "getGridParam", parameterName?: string): any;

	getDataIDs?(): string[];
	jqGrid(methodName: "getDataIDs"): string[];
	
	editGridRow?(rowid: string, options: FreeJqGrid.FormEditingOptions): void;
	jqGrid(methodName: "editGridRow", rowid: string, options: FreeJqGrid.FormEditingOptions): any;
	
	on(eventName: "jqGridSelectRow", handler: (eventObject: JQueryEventObject, rowid: string, state: boolean, orgEventObject: JQueryEventObject) => void): FreeJqGrid.JQueryJqGrid;
	
	// form editing events
	on(eventName: "jqGridAddEditAfterClickPgButtons", handler: (eventObject: JQueryEventObject, whichButton: "next" | "prev", $form: JQuery, rowid: string) => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridAddEditAfterComplete", handler: (eventObject: JQueryEventObject, jqXhr: JQueryXHR, postdata: Object | string, $form: JQuery, editOrAdd: "edit" | "add") => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridAddEditAfterShowForm", handler: (eventObject: JQueryEventObject, $form: JQuery, editOrAdd: "edit" | "add") => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridAddEditAfterSubmit", handler: (eventObject: JQueryEventObject, jqXhr: JQueryXHR, postdata: Object | string, editOrAdd: "edit" | "add") => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridAddEditBeforeInitData", handler: (eventObject: JQueryEventObject, $form: JQuery, editOrAdd: "edit" | "add") => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridAddEditBeforeShowForm", handler: (eventObject: JQueryEventObject, $form: JQuery, editOrAdd: "edit" | "add") => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridAddEditBeforeSubmit", handler: (eventObject: JQueryEventObject, postdata: Object | string, $form: JQuery, editOrAdd: "edit" | "add") => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridAddEditClickPgButtons", handler: (eventObject: JQueryEventObject, whichButton: "next" | "prev", $form: JQuery, rowid: string) => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridAddEditClickSubmit", handler: (eventObject: JQueryEventObject, options: FreeJqGrid.FormEditingOptions, postdata: Object | string, editOrAdd: "edit" | "add") => Object | string): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridAddEditInitializeForm", handler: (eventObject: JQueryEventObject, $form: JQuery, editOrAdd: "edit" | "add") => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridAddEditSerializeEditData", handler: (eventObject: JQueryEventObject, postdata: Object) => Object | string): FreeJqGrid.JQueryJqGrid;
}