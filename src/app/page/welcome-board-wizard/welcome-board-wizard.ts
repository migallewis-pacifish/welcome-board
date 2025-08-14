import { Component, ViewChild, signal } from '@angular/core';
import { Wizard } from '../../components/wizard/wizard';
import { StandOptions } from '../../components/options/stand-options/stand-options';
import { BoardShapeOptionsComponent } from '../../components/options/board-shape-options/board-shape-options';
import { AcrylicOptionsComponent } from '../../components/options/acrylic-options/acrylic-options';
import { LayoutOptionsComponent } from '../../components/options/layout-options/layout-options';

@Component({
  selector: 'app-welcome-board-wizard',
  standalone: true,
  imports: [Wizard, StandOptions, 
    BoardShapeOptionsComponent, 
    AcrylicOptionsComponent,
    LayoutOptionsComponent
  ],
  templateUrl: './welcome-board-wizard.html',
  styleUrl: './welcome-board-wizard.css'
})
export class WelcomeBoardWizard {
  public steps = [
 {
 header: 'Choose your stand',
 description: 'Select the perfect stand to support your welcome board.'
    },
 {
 header: 'Select your board shape',
 description: 'Choose the shape of your acrylic board.'
    },
 {
 header: 'Pick your acrylic',
 description: 'Decide on the type and color of your acrylic.'
    },
 {
 header: 'Define layout',
 description: 'Arrange the sections and overall look of your design.'
    },
 {
 header: 'Add message',
 description: 'Personalize your board with a custom message.'
    },
 {
 header: 'Confirm order',
 description: 'Review your selections and complete your order.'
    }
  ];
  public totalSteps = signal<number>(3);
  public currentStepIndex = signal<number>(0);
  currentStep = signal<number>(0);
  @ViewChild(Wizard) wizardComponent!: Wizard;

  // A simple mapping from stand name to image URL (replace with your actual image paths)
  private standImageMap: Record<string, string> = {
    'metal-easel': 'assets/images/metal-easel.png',
    'wooden-easel': 'assets/images/wooden-easel.png',
    'metallic-gold-rectangular-frame': 'assets/images/metallic-gold-rectangular-frame.png',
    'metallic-black-rectangular-frame': 'assets/images/metallic-black-rectangular-frame.png',
  };

  handleStandSelection(stand: string) {
    const imageUrl = this.standImageMap[stand];
    if (imageUrl && this.wizardComponent) {
      this.wizardComponent.selectOption(imageUrl);
    }
  }

  nextStep() {
    if (this.currentStepIndex() < this.steps.length - 1) {
      this.currentStepIndex.update(index => index + 1);
    }
  }

  previousStep() {
    if (this.currentStepIndex() > 0) {
      this.currentStepIndex.update(index => index - 1);
    }
  }
}
