
export type RunCommand = {
  run: string,
  routine?: number,
}

export type StartRoutineCommand = {
  startRoutine: number,
  routine?: number,
}

export type EndRoutineCommand = {
  endRoutine: number,
}

export type SelectorSubCommand = {
  id: number,
  selector: string,
  dynamic?: boolean,
  parent?: number,
}

export type SelectorAllSubCommand = {
  id: number,
  selectorAll: string,
  dynamic?: boolean,
  parent?: number,
}

export type IdSubCommand = {
  id: number,
  elementId: string,
}

export type HeadSubCommand = {
  head: number,
}

export type BodySubCommand = {
  body: number,
}

export type FragmentSubCommand = {
  id: number,
  fragment: string,
}

export type ContentSubCommand = {
  id: number,
  content: number,
}

export type ParentSubCommand = {
  parent: number,
  target: number,
}

export type FirstChildSubCommand = {
  firstChild: number,
  target: number,
}

export type LastChildSubCommand = {
  lastChild: number,
  target: number,
}

export type NextSiblingSubCommand = {
  nextSibling: number,
  target: number,
}

export type PrevSiblingSubCommand = {
  prevSibling: number,
  target: number,
}

export type CloneSubCommand = {
  id: number,
  clone: number,
}

export type TextSubCommand = {
  target: number,
  text: string,
}

export type HtmlSubCommand = {
  target: number,
  html: string,
}

export type AttrSubCommand = {
  target: number,
  attr: string,
  value: string,
}

export type RemoveAttrSubCommand = {
  target: number,
  removeAttr: string,
}

export type AddToAttrSubCommand = {
  target: number,
  addToAttr: string,
  value: string,
}

export type RemoveFromAttrSubCommand = {
  target: number,
  removeFromAttr: string,
  value: string,
}

export type RemoveSubCommand = {
  remove: number,
}

export type InsertNodeBeforeSubCommand = {
  parent: number,
  ref: number,
  insertNodeBefore: number,
}

export type InsertBeforeSubCommand = {
  parent: number,
  ref: number,
  insertBefore: string,
}

export type AppendNodeSubCommand = {
  parent: number,
  appendNode: number,
}

export type AppendSubCommand = {
  parent: number,
  append: string,
}

export type WaitSubCommand = {
  target: number,
  wait: string,
  timeout?: number,
}

export type TransactionSubCommand =
  | SelectorSubCommand
  | SelectorAllSubCommand
  | IdSubCommand
  | HeadSubCommand
  | BodySubCommand
  | FragmentSubCommand
  | ContentSubCommand
  | ParentSubCommand
  | FirstChildSubCommand
  | LastChildSubCommand
  | NextSiblingSubCommand
  | PrevSiblingSubCommand
  | CloneSubCommand
  | TextSubCommand
  | HtmlSubCommand
  | AttrSubCommand
  | RemoveAttrSubCommand
  | AddToAttrSubCommand
  | RemoveFromAttrSubCommand
  | RemoveSubCommand
  | InsertNodeBeforeSubCommand
  | InsertBeforeSubCommand
  | AppendNodeSubCommand
  | AppendSubCommand
  | WaitSubCommand

export type TransactionCommand = {
  tx?: TransactionSubCommand[],
  hash?: string,
  routine?: number,
  once?: boolean,
}

export type Command =
  | RunCommand
  | StartRoutineCommand
  | EndRoutineCommand
  | TransactionCommand
