import {
  AppShell, Text,
} from '@mantine/core';
import { useMemo } from 'react';
import { ReactMarkdownWrapper } from '../ReactMarkdownWrapper';
import { useStudyConfig } from '../../store/hooks/useStudyConfig';
import { useStoredAnswer } from '../../store/hooks/useStoredAnswer';
import { ResponseBlock } from '../response/ResponseBlock';
import { useCurrentComponent } from '../../routes/utils';
import { studyComponentToIndividualComponent } from '../../utils/handleComponentInheritance';
import { useIsDarkMode } from '../../store/hooks/useIsDarkMode';

export function AppNavBar() {
  const trialHasSideBar = useStudyConfig()?.uiConfig.sidebar;
  const trialHasSideBarResponses = true;

  // Get the config for the current step
  const studyConfig = useStudyConfig();
  const currentComponent = useCurrentComponent();
  const stepConfig = studyConfig.components[currentComponent];

  const currentConfig = useMemo(() => {
    if (stepConfig) {
      return studyComponentToIndividualComponent(stepConfig, studyConfig);
    }

    return null;
  }, [stepConfig, studyConfig]);

  const isDarkMode = useIsDarkMode();

  const status = useStoredAnswer();
  const instruction = currentConfig?.instruction || '';

  const instructionInSideBar = currentConfig?.instructionLocation === 'sidebar'
    || currentConfig?.instructionLocation === undefined;

  return trialHasSideBar && currentConfig ? (
    <AppShell.Navbar bg={isDarkMode ? '' : 'gray.1'} display="block" style={{ zIndex: 0, overflowY: 'scroll' }}>
      {instructionInSideBar && instruction !== '' && (
        <AppShell.Section
          bg={isDarkMode ? '' : 'gray.3'}
          p="md"
        >
          <Text span c="orange.8" fw={700} inherit>
            Task:
          </Text>
          <ReactMarkdownWrapper text={instruction} />
        </AppShell.Section>
      )}

      {trialHasSideBarResponses && (
        <AppShell.Section p="md">
          <ResponseBlock
            key={`${currentComponent}-sidebar-response-block`}
            status={status}
            config={currentConfig}
            location="sidebar"
          />
        </AppShell.Section>
      )}
    </AppShell.Navbar>
  ) : (
    <AppShell.Navbar bg={isDarkMode ? '' : 'gray.1'} display="block" style={{ zIndex: 0, overflowY: 'scroll' }}>
      <ResponseBlock
        key={`${currentComponent}-sidebar-response-block`}
        status={status}
        config={currentConfig}
        location="sidebar"
        style={{ display: 'hidden' }}
      />
    </AppShell.Navbar>
  );
}
