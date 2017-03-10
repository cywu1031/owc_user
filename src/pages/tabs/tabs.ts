import { Component } from '@angular/core';
import { Tab } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';
import { HistoryPage } from '../history/history';
import { AnalysisPage } from '../analysis/analysis';
import { ManagementPage } from '../management/management';
import { ShareService } from '../../providers/shareservice';

@Component({
  templateUrl: 'tabs.html',
  providers: [ShareService]
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = DashboardPage;
  tab2Root: any = HistoryPage;
  tab3Root: any = AnalysisPage;
  tab4Root: any = ManagementPage;

  constructor(public shareService: ShareService) {
  }

  tabChange(tab: Tab){
  }
}
