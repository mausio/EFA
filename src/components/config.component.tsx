import { useAppDispatch, useAppSelector, useAppThunkDispatch } from '../store/hooks'
import {
  selectAutocompletionArray,
  selectConfigIsOpen,
  selectDestinationLocation,
  selectOriginLocation,
  selectPtModesOptions,
} from '../store/selectors/config.selector'
import {
  ButtonContainer,
  ConfigContainer,
  ConfigOptions,
  ConfigOverlay,
  DestinationSearch, DestinationStation,
  OriginSearch, OriginStation, PtModeOptionsSection,
  QuitWindow,
  WindowTitle,
} from '../styles/config.styles'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen'
import SettingsIcon from '@mui/icons-material/Settings'
import { Button, ClickAwayListener, FormControl, FormControlLabel, FormGroup, FormLabel, Switch } from '@mui/material'
import { ptModesOptions, toggleConfigWindow } from '../store/slicers/config.slicer'
import { useState } from 'react'
import { LocationType, PtModesOptions } from '../types/config.types'
import AutocompleteComponent from './autocomplete.component'


const ConfigComponent = () => {
  const configIsOpen = useAppSelector(selectConfigIsOpen)
  const thunkDispatch = useAppThunkDispatch()
  const originLocation = useAppSelector(selectOriginLocation)
  const destinationLocation = useAppSelector(selectDestinationLocation)
  const ptModes = useAppSelector(selectPtModesOptions)
  const autocompletionArray = useAppSelector(selectAutocompletionArray)
  const [hiding, setHiding] = useState<boolean>(false)
  const [modeOptions, setModeOptions] = useState<PtModesOptions>(ptModes)


  const dispatch = useAppDispatch()

  const toggleConfigWindowHandler = () => {
    if (configIsOpen) {
      setHiding(true)
      setTimeout(() => {
        dispatch(toggleConfigWindow(false))
      }, 800)
      return
    }
    setHiding(false)
    dispatch(toggleConfigWindow(true))
  }

  const changeModeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModeOptions({
      ...modeOptions,
      [event.target.name]: event.target.checked,
    })
    dispatch(ptModesOptions(modeOptions))

  }

  return (
    <>
      <ButtonContainer>
        <Button
          size='large'
          variant='contained'
          onClick={toggleConfigWindowHandler}
          startIcon={<SettingsIcon />}
        />
      </ButtonContainer>

      {
        configIsOpen &&
        (<ConfigOverlay className={hiding ? 'hidingOverlay' : ''}>
          <ConfigContainer>
            <ClickAwayListener onClickAway={toggleConfigWindowHandler}>
              <ConfigOptions className={hiding ? 'hidingConfig' : ''}>
                <WindowTitle>Configurations</WindowTitle>

                <QuitWindow>
                  <Button
                    size='small'
                    variant='contained'
                    onClick={toggleConfigWindowHandler}
                    className={'quitWindow'}
                    startIcon={<CloseFullscreenIcon />}></Button>
                </QuitWindow>

                <OriginSearch>
                  <AutocompleteComponent
                    options={autocompletionArray}
                    thunkDispatch={thunkDispatch}
                    dispatch={dispatch}
                    locationType={LocationType.origin}
                  />
                </OriginSearch>
                <OriginStation>
                  <span>optional destination:</span>
                  {originLocation ? (
                    <span>{originLocation?.label}</span>
                  ) : (
                    <span>none</span>
                  )}
                </OriginStation>

                <DestinationSearch>
                  <AutocompleteComponent
                    options={autocompletionArray}
                    thunkDispatch={thunkDispatch}
                    dispatch={dispatch}
                    locationType={LocationType.destination} />
                </DestinationSearch>
                <DestinationStation>
                  <span>optional destination:</span>
                  {destinationLocation ? (
                    <span>{destinationLocation.label}</span>
                  ) : (
                    <span>none</span>
                  )}
                </DestinationStation>

                <PtModeOptionsSection>
                  <FormControl component='fieldset' variant='standard'>
                    <FormLabel component='legend'>
                      pt options
                    </FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={modeOptions.rail}
                            onChange={changeModeHandler}
                            name='rail'
                          />
                        }
                        label='rail'
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={modeOptions.tram}
                            onChange={changeModeHandler}
                            name='tram'
                          />
                        }
                        label='tram'
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={modeOptions.bus}
                            onChange={changeModeHandler}
                            name='bus'
                          />
                        }
                        label='bus'
                      />
                    </FormGroup>
                  </FormControl>
                </PtModeOptionsSection>
              </ConfigOptions>
            </ClickAwayListener>
          </ConfigContainer>
        </ConfigOverlay>)
      }
    </>
  )
}


export default ConfigComponent