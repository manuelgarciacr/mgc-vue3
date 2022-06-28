import { Ref } from "vue"

export default interface Label {
    element: HTMLElement
    isVisible: Ref<boolean>
    offset: number
    type: string
}
