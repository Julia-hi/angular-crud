/**
 * Action button interface
 * used for ActionCutton of tables
 */
export interface ActionButton {
    icon?: string;
    label?: string;
    class?: string;
    onClick: (rowData: any) => void;
}
