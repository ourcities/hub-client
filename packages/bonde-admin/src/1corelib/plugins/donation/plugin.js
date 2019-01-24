import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FormattedMessage, intlShape } from 'react-intl'
import { Progress } from './components'
import { numberUtils } from './utils'

if (require('exenv').canUseDOM) require('./plugin.scss')


class Donation extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      hasMouseOver: false,
      loading: false,
      success: false,
      selected_value: 1,
      selected_payment_type: 'recurring',
      errors: []
    }
  }

  componentDidMount () {
    const { widget } = this.props

    const defaultDonationValue = (
      widget.settings && widget.settings.default_donation_value
        ? widget.settings.default_donation_value
        : 1
    )
    this.setState({ selected_value: Number(defaultDonationValue) })
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.loading) {
      this.setState({ loading: false, success: true })
    }
  }

  handleClickSetTypeDonation (paymentType) {
    this.setState({ selected_payment_type: paymentType })
  }

  handleClickSetValueDonation (v) {
    this.setState({ selected_value: Number(v) })
  }

  handleClickDonate () {
    const { mobilization, widget, donationCustomerData } = this.props
    const {
      selected_value: selectedValue,
      selected_payment_type: selectedPaymentType
    } = this.state

    this.props.handleDonationTransactionCreate({
      mobilization,
      widget,
      selectedValue,
      selectedPaymentType,
      storedDonationCustomerData: donationCustomerData
    }).then(() => {
      this.setState({ success: true })
    })
  }

  renderProgressBar (mainColor) {
    let goalDateRemaining
    const { donationGoalStats, widget: { settings, goal } } = this.props

    const goalStats = (
      !donationGoalStats ||
      !donationGoalStats.data ||
      donationGoalStats.loading
    )
      ? undefined
      : JSON.parse(donationGoalStats.data)

    if (settings && settings.goal_date_limit) {
      const now = new Date()
      const [day, month, year] = settings.goal_date_limit.split('/')
      const goalDate = new Date(`${year}-${month}-${day}`)
      goalDateRemaining = Math.ceil((goalDate - now) / (1000 * 60 * 60 * 24))
    }

    const props = {
      value: 0,
      valueTopLeft: '',
      valueTopRight: '',
      valueBottomLeft: '',
      valueBottomRight: ''
    }

    if (goalStats) {
      if (goalStats.pledged) {
        props.valueTopCenter = (
          <div>
            <div style={{
              color: mainColor,
              fontSize: '2.5em',
              lineHeight: '1em',
              fontWeight: 'bold'
            }}>
              {numberUtils.currencyInt(goalStats.pledged)}
            </div>
            <div style={{
              color: '#666',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              margin: '0.4rem 0 0'
            }}>
              <FormattedMessage
                id='widgets.components--donation.progress-bar.collected'
                defaultMessage='arrecadados'
              />
            </div>
          </div>
        )
      }
      if (goalStats.progress) {
        props.value = goalStats.progress
      }
      if (goalStats.total_donations) {
        props.valueBottomLeft = (
          <span style={{ color: '#999999' }}>
            <FormattedMessage
              id='widgets.components--donation.progress-bar.supports'
              defaultMessage={`
                {totalDonations} {totalDonations, plural,
                  one {apoio}
                  other {apoios}
                }
              `}
              values={{ totalDonations: goalStats.total_donations }}
            />
          </span>
        )
      }
    }

    if (goal) {
      props.valueBottomCenter = (
        <b>
          <span style={{ color: '#999999' }}>
            <FormattedMessage
              id='widgets.components--donation.progress-bar.goal'
              defaultMessage='Meta:'
            />
          </span>
          {' '}{numberUtils.currencyInt(goal)}
        </b>
      )
    }
    if (goalDateRemaining !== undefined) {
      if (goalDateRemaining === 0) {
        props.valueBottomRight = (
          <FormattedMessage
            id='widgets.components--donation.progress-bar.date.last-day'
            defaultMessage='último dia!'
          />
        )
      } else if (goalDateRemaining > 0 && goalDateRemaining < 7) {
        props.valueBottomRight = (
          <FormattedMessage
            id='widgets.components--donation.progress-bar.date.last-days'
            defaultMessage='últimos dias!'
          />
        )
      } else if (goalDateRemaining === 7) {
        props.valueBottomRight = (
          <FormattedMessage
            id='widgets.components--donation.progress-bar.date.last-week'
            defaultMessage='última semana!'
          />
        )
      } else if (goalDateRemaining > 0) {
        props.valueBottomRight = (
          <FormattedMessage
            id='widgets.components--donation.progress-bar.date.remaining'
            defaultMessage={`
              faltam {goalDateRemaining} {goalDateRemaining, plural,
                one {dia}
                other {dias}
              }
            `}
            values={{ goalDateRemaining }}
          />
        )
      }

      props.valueBottomRight = (
        <b style={{ color: mainColor }}>
          {props.valueBottomRight}
        </b>
      )
    }

    return (goal || goalDateRemaining !== undefined) && (
      <Progress fillColor={mainColor} {...props} />
    )
  }

  renderButton () {
    const {
      widget: { settings },
      mobilization: { header_font: headerFont },
      intl
    } = this.props

    const {
      selected_value: selectedValue,
      selected_payment_type: selectedPaymentType
    } = this.state

    const buttonText = (settings && settings.button_text) || (
      <FormattedMessage
        id='widgets.components--donation.default.button-text'
        defaultMessage='Doar agora'
      />
    )
    const titleText = (settings && (settings.call_to_action || settings.title_text)) || (
      <FormattedMessage
        id='widgets.components--donation.default.title-text'
        defaultMessage='Clique para configurar seu bloco de doação'
      />
    )

    const donationValue1 = (settings && settings.donation_value1) || 0
    const donationValue2 = (settings && settings.donation_value2) || 0
    const donationValue3 = (settings && settings.donation_value3) || 0
    const donationValue4 = (settings && settings.donation_value4) || 0
    const donationValue5 = (settings && settings.donation_value5) || 0
    const mainColor = (settings && settings.main_color) || '#54d0f6'

    const paymentType = (settings && settings.payment_type) || 'unique'
    const recurringPeriod = (settings && settings.recurring_period) || 30

    const isUniquePayment = paymentType === 'unique' || selectedPaymentType === 'unique'
    const periodLabelOptions = {
      30: intl.formatMessage({
        id: 'widgets.components--donation.period-label-options.month',
        defaultMessage: 'mês'
      }),
      180: intl.formatMessage({
        id: 'widgets.components--donation.period-label-options.halfyear',
        defaultMessage: 'semestre'
      }),
      365: intl.formatMessage({
        id: 'widgets.components--donation.period-label-options.year',
        defaultMessage: 'ano'
      })
    }
    const periodLabelCurrent = periodLabelOptions[recurringPeriod]
    const periodLabel = isUniquePayment ? '' : periodLabelCurrent

    return (
      <div className='donation center clearfix'>
        <h2
          className='p2 m0 white rounded-top'
          style={{ fontFamily: headerFont, backgroundColor: mainColor }}
        >
          {titleText}
        </h2>
        <script dangerouslySetInnerHTML={{__html: `
(function(i,s,o,g,r,a,m){i['PagarMeCheckoutObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://assets.pagar.me/checkout/checkout.js','PagarMeCheckout');`
        }} />

        <div className='p3 relative'>
          {paymentType === 'users_choice' ? <div className='mb2 clearfix'>
            <button type='button' onClick={() => this.handleClickSetTypeDonation('recurring')}
              style={selectedPaymentType === 'recurring' ? { color: mainColor } : {}}
              className={selectedPaymentType === 'recurring' ? 'payment-type bold py1 col col-6 active' : 'payment-type bold py1 col col-6'}>
              <i className='icon-payment-recurring' />
              <FormattedMessage
                id='widgets.components--donation.users-choice.recurring'
                defaultMessage='Apoiar todo {periodLabelCurrent}'
                values={{ periodLabelCurrent }}
              />
            </button>
            <button type='button' onClick={() => this.handleClickSetTypeDonation('unique')}
              style={selectedPaymentType === 'unique' ? {color: mainColor} : {}}
              className={selectedPaymentType === 'unique' ? 'payment-type bold py1 col col-6 active' : 'payment-type bold py1 col col-6'}>
              <i className='icon-payment-unique' />
              <FormattedMessage
                id='widgets.components--donation.users-choice.unique'
                defaultMessage='Doação única'
              />
            </button>
          </div> : ''}
          {donationValue1 <= 0 ? null : (
            <button
              type='button'
              onClick={() => this.handleClickSetValueDonation(1)}
              style={selectedValue !== 1 ? {} : { backgroundColor: this.convertHex(mainColor, 35), color: mainColor }}
              className={classnames('value-option block mb1 py1 col-12 bold hover no-underscore', selectedValue === 1 ? 'active' : 'bg-darken-1')}
            >
              {'R$ ' + donationValue1 + (paymentType === 'recurring' || (selectedPaymentType === 'recurring' && paymentType !== 'unique') ? ' /' : '') + periodLabel}
            </button>
          )}
          {donationValue2 <= 0 ? null : (
            <button
              type='button'
              onClick={() => this.handleClickSetValueDonation(2)}
              style={selectedValue !== 2 ? {} : { backgroundColor: this.convertHex(mainColor, 35), color: mainColor }}
              className={classnames('value-option block mb1 py1 col-12 bold hover no-underscore', selectedValue === 2 ? 'active' : 'bg-darken-1')}
            >
              {'R$ ' + donationValue2 + (paymentType === 'recurring' || (selectedPaymentType === 'recurring' && paymentType !== 'unique') ? ' /' : '') + periodLabel}
            </button>
          )}
          {donationValue3 <= 0 ? null : (
            <button
              type='button'
              onClick={() => this.handleClickSetValueDonation(3)}
              style={selectedValue !== 3 ? {} : { backgroundColor: this.convertHex(mainColor, 35), color: mainColor }}
              className={classnames('value-option block mb1 py1 col-12 bold hover no-underscore', selectedValue === 3 ? 'active' : 'bg-darken-1')}
            >
              {'R$ ' + donationValue3 + (paymentType === 'recurring' || (selectedPaymentType === 'recurring' && paymentType !== 'unique') ? ' /' : '') + periodLabel}
            </button>
          )}
          {donationValue4 <= 0 ? null : (
            <button
              type='button'
              onClick={() => this.handleClickSetValueDonation(4)}
              style={selectedValue !== 4 ? {} : { backgroundColor: this.convertHex(mainColor, 35), color: mainColor }}
              className={classnames('value-option block mb1 py1 col-12 bold hover no-underscore', selectedValue === 4 ? 'active' : 'bg-darken-1')}
            >
              {'R$ ' + donationValue4 + (paymentType === 'recurring' || (selectedPaymentType === 'recurring' && paymentType !== 'unique') ? ' /' : '') + periodLabel}
            </button>
          )}
          {donationValue5 <= 0 ? null : (
            <button
              type='button'
              onClick={() => this.handleClickSetValueDonation(5)}
              style={selectedValue !== 5 ? {} : { backgroundColor: this.convertHex(mainColor, 35), color: mainColor }}
              className={classnames('value-option block mb1 py1 col-12 bold hover no-underscore', selectedValue === 5 ? 'active' : 'bg-darken-1')}
            >
              {'R$ ' + donationValue5 + (paymentType === 'recurring' || (selectedPaymentType === 'recurring' && paymentType !== 'unique') ? ' /' : '') + periodLabel}
            </button>
          )}

          <button
            type='button'
            onClick={this.handleClickDonate.bind(this)}
            style={{ backgroundColor: mainColor }}
            className='btn white caps bg-darken-4 p2 mt1 col-12 rounded border-box'
          >
            {buttonText}
          </button>
        </div>

        <div className='p3' style={{ boxShadow: '#E3E3E3 0px 15px 18px -10px inset' }}>
          {this.renderProgressBar(mainColor)}
        </div>
      </div>
    )
  }

  convertHex (hex, opacity) {
    hex = hex.replace('#', '')
    let r = parseInt(hex.substring(0, 2), 16)
    let g = parseInt(hex.substring(2, 4), 16)
    let b = parseInt(hex.substring(4, 6), 16)

    let result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')'
    return result
  }

  renderForm () {
    return (
      <div>
        {this.renderButton()}
      </div>
    )
  }

  renderThankyouText () {
    const { mobilization, widget, overrides } = this.props
    const { settings: { finish_message_type: finishMessageType } } = widget

    const {
      FinishCustomMessage: { component: FinishCustomMessage },
      FinishDefaultMessage: { component: FinishDefaultMessage }
    } = overrides

    return finishMessageType === 'custom' ? (
      <FinishCustomMessage mobilization={mobilization} widget={widget} />
    ) : (
      <FinishDefaultMessage mobilization={mobilization} widget={widget} />
    )
  }

  renderReattemptMessage () {
    const { widget: { settings } } = this.props
    const mainColor = (settings && settings.main_color) || '#54d0f6'

    return (
      <div className='donation'>
        <h2
          className='p2 m0 white rounded-top center'
          style={{ backgroundColor: mainColor }}
        >
          <FormattedMessage
            id='widgets.components--donation.reattempt.message.title'
            defaultMessage='Ops!'
          />
        </h2>
        <div style={{ textAlign: 'center', color: '#333', padding: '3rem 0' }}>
          <i
            className='error-icon inline-block mb2'
            style={{ backgroundColor: '#de0000' }}
          />
          <br />

          <FormattedMessage
            id='widgets.components--donation.reattempt.message.text.line-01'
            defaultMessage='Algo de errado aconteceu com a sua doação. ):'
          />
          <br />
          <FormattedMessage
            id='widgets.components--donation.reattempt.message.text.line-02'
            defaultMessage='Clique no botão abaixo pra tentar de novo.'
          />
          <br />

          <button
            onClick={this.handleClickDonate.bind(this)}
            style={{ backgroundColor: mainColor }}
            className='btn white caps bg-darken-4 p2 mt3 rounded border-box'
          >
            <FormattedMessage
              id='widgets.components--donation.reattempt.message.button.text'
              defaultMessage='Nova tentativa'
            />
          </button>
        </div>
      </div>
    )
  }

  renderContentStrategy () {
    if (this.props.donationCustomerData) return this.renderReattemptMessage()
    else if (this.state.success) return this.renderThankyouText()
    else return this.renderForm()
  }

  render () {
    return (
      <div className='bg-white widget rounded'>
        {this.renderContentStrategy()}
      </div>
    )
  }
}

const { any, bool, func, object, shape } = PropTypes

Donation.propTypes = {
  mobilization: object.isRequired,
  widget: object.isRequired,
  hasNewField: bool,
  handleDonationTransactionCreate: func,
  intl: intlShape,
  // Overrides componente of success action
  overrides: shape({
    FinishCustomMessage: shape({
      component: any
    }).isRequired,
    FinishDefaultMessage: shape({
      component: any
    }).isRequired
  }).isRequired
}

export default Donation