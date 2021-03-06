import { Component, Input } from "@angular/core";
import { FormGroup, AbstractControl } from "@angular/forms";
import { ValidarCamposService } from "../validar-campos.service";

@Component({
    selector: "app-input-text",
    templateUrl: "./input-text.component.html",
    styleUrls: ["./input-text.component.scss"],
})
export class InputTextComponent {
    @Input() title: string;
    @Input() placeholder: string;
    @Input() controlName: string;
    @Input() formGroup: FormGroup;

    constructor(public validacao: ValidarCamposService) {}

    get formControl(): AbstractControl {
        return this.formGroup.controls[this.controlName];
    }
}
