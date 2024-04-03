/* eslint-disable max-len*/

export default {
    locale: {
        current_language_name: 'English',
    },
    pages: {
        staking: {
            note_unstaking_period: 'Please note that there is an unstaking period of {period}',
            claim_tlos: 'Claim NEP',
            add_stlos_to_metamask: 'Launch MetaMask dialog to add sTLOS',
            metamask_fox_logo: 'MetaMask fox logo',
            cancel: 'Cancel',
            stake_tlos_confirm: 'Continuing will stake NEP in exchange for sTLOS. ' +
            'sTLOS can be redeemed for NEP at any time using the Unstake tab.',
            stake_tlos_confirm_2a: 'After NEP has been unstaked, it will be locked for a period of', /* unstakePeriodPretty...*/
            stake_tlos_confirm_2b: /*...unstakePeriodPretty */ 'after which it can be withdrawn to your account from the Withdraw tab.',
            stake_tlos_confirm_3: 'Would you like to proceed?',
            stake_tlos: 'Stake NEP',
            stake_tlos_subheader: 'Staking your NEP to sTLOS grants you access to a steady income and various DeFi applications, ' +
            'further increasing yield. As the reward pool increases, the NEP to sTLOS conversion rate will change ' +
            'over time. Therefore, the amount of sTLOS received is smaller than the staked NEP. Rewards will be ' +
            'auto-compounded. No further action is required.',
            receive_stlos: 'Receive sTLOS',
            available: '{balanceTlos} Available',
            insufficient_tlos_balance: 'Insufficient NEP balance to stake',
            login_using_an_evm_wallet: 'Login using an EVM wallet',
            wallet_not_connected: 'Wallet not connected',
            click_to_input_full_wallet_balance: 'Click to input full wallet balance\n\n' +
            'Balance displayed is reduced by 1 NEP to keep your account actionable.\n' +
            'Precise balance (less approximate gas fees):\n' +
            '{prettyBalance} NEP',
            loading: 'Loading...',
            get_more_tlos: 'Get more NEP',
            connect_wallet: 'Connect Wallet',
            minutes: 'minutes',
            hours: 'hours',
            days: 'days',
            unstake: 'Unstake',
            stake: 'Stake',
            withdraw: 'Withdraw',
            telos_evm_staking: 'Telos EVM Staking',
            stake_tlos_earn_interest: 'Stake NEP for sTLOS to earn interest from the staking rewards pool',
            staked: 'Staked',
            unstaked: 'Unstaked',
            tooltip_1: 'APY: Annual Percentage Yield\n\nThe annual rate of return after taking compound interest into account.\n\n' +
            'Interest is compounded approximately every 30 minutes. The percentage rate is not fixed, meaning that ' +
            'it will change over time with the total amount of NEP staked across Telos EVM and Native. ' +
            'Rewards are disbursed from a community rewards pool into the sTLOS contract.',
            tooltip_2: 'TVL: Total Value Locked\n\nThe current value, in NEP, of all assets held in the sTLOS ' +
            '(Staked NEP) smart contract, i.e. the sum of all NEP staked on the Telos EVM at this moment.',
            tooltip_3: 'Staked\n\n' +
            'The total staked amount associated with the logged-in account, i.e. ' +
            'your sTLOS token balance, along with its value in NEP',
            tooltip_4: 'Unstaked\n\n' +
            'The total value of NEP which you have unstaked, both locked and unlocked.\n\n' +
            'When you unstake\u2014i.e. redeem\u2014some value of sTLOS, the equivalent amount of ' +
            'NEP is sent into escrow ("locked") for {unlockPeriod}; during this time, ' +
            'you cannot interact with this NEP.\n\n' +
            'After the unlock period has elapsed, you can withdraw your unlocked NEP from the Withdraw tab ' +
            'on this page, at which point it will be added to your account NEP balance.',
            confirm_unstake_1a: 'Continuing will redeem sTLOS in exchange for NEP. ' +
            'Unstaked NEP will remain locked for a period of', /* unstakePeriodPretty...*/
            confirm_unstake_1b: /*...unstakePeriodPretty */ 'after which it can be withdrawn to your account from the Withdraw tab',
            confirm_unstake_2a: 'Heads up, you may unstake ', /* remainingDeposits...*/
            confirm_unstake_2b: /*...remainingDeposits */ 'more times before ' +
            'you reach the maximum concurrent unstake actions. When you reach the maximum, you will need to withdraw' +
            'unlocked NEP to continue unstaking. If you don\'t have any withdrawable NEP at that time, you must' +
            'wait until the lock duration has elapsed before you can withdraw unlocked NEP and unstake more sTLOS. -',
            unstake_stlos_for_tlos: 'Unstake sTLOS in exchange for NEP',
            unstake_stlos: 'Unstake sTLOS',
            receive_tlos: 'Receive NEP',
            amount: 'Amount',
            time_remaining: 'Time Remaining',
            full_staked_balance_tooltip: 'Click to input full staked balance\n\n' +
            'Precise balance (less approximate gas fees):\n' +
            '{prettyBalance} sTLOS',
            login_using_evm_wallet: 'Login using an EVM wallet',
            max_unstake_transactions_reached: 'You have reached the maximum number of pending unstake transactions, ' +
            'please withdraw available NEP or wait for pending unstaked NEP to become withdrawable before making another deposit.',
            click_to_change_time_format: 'Click to change time format',
            unstaking: 'Unstaking',
            available_to_withdraw: 'Available to withdraw',
            withdraw_tlos: 'Withdraw NEP',
            withdraw_successful: 'Withdraw successful! View Transaction:',
            no_withdrawable_positions: 'No withdrawable positions',
            you_have_unlocked_tlos: 'You have unlocked NEP!',
            stake_tlos_success: 'Stake successful! View Transaction:',
            unstake_stlos_success: 'Unstake successful! View Transaction:',
            deposit_failed: 'Failed to deposit NEP: { message }',
            redeem_failed: 'Unable to convert STLOS to NEP: { message }',
            fetch_balance_error: 'Failed to fetch account: { message }',
            fetch_stlos_balance_error: 'Failed to fetch account STLOS balance: { message }',
            fetch_stlos_value_error: 'Failed to fetch account STLOS balance value: { message }',
            fetch_unstaked_balance_error: 'Failed to fetch total unstaked NEP balance: { message }',
            fetch_unlocked_balance_error: 'Failed to fetch withdrawable STLOS balance: { message }',
            fetch_escrow_deposits_error: 'Failed to fetch escrow deposits: { message }',
            fetch_conversion_rate_error: 'Failed to fetch NEP->sTLOS conversion rate: { message }',
            fetch_stlos_contract_error: 'Failed to get STLOS contract: { message }',
            fetch_escrow_contract_error: 'Failed to get STLOS contract: { message }',
            fetch_unstake_period_error: 'Failed to retrieve unstaking period: { message }',
            fetch_account_error: 'Failed to fetch account: { message }',
            fetch_stlos_tvl_error: 'Failed to fetch sTLOS TVL: { message }',
            fetch_stlos_apy_error: 'Failed to fetch sTLOS APY: { message }',
            fetch_max_deposits_error: 'Failed to fetch max deposits from escrow contract { message }',
            convert_tlos_to_stlos_error: 'Unable to convert NEP to STLOS { message }',
            convert_stlos_to_tlos_error: 'Unable to convert STLOS to NEP { message }',
            unstake_stlos_error: 'Failed to unstake sTLOS { message }',
            withdraw_failed: 'Failed to withdraw unlocked NEP: { message }',
        },
        explore_transactions: 'Explore Transactions',
        recent_transactions: 'Recent transactions',
        telos_evm_explorer: 'Nephele Cloud Explorer',
        rpc_endpoints: 'RPC Endpoints',
        monitor: 'Monitor',
        oops: 'Oops. Nothing here...',
        go_home: 'Go Home',
        select_sol_file: 'Select .sol contract file for upload',
        select_json_file: 'Select standard JSON input object file for upload',
        paste_contract_contents: 'you must select a file for upload or toggle input to paste contract contents',
        contract_address: 'Contract Address',
        enter_contract_address: 'Please enter contract address \'0x0123...\'',
        invalid_address_format: 'invalid address format',
        compiler_version: 'Compiler Version',
        select_compiler_version: 'select compiler version',
        eg_contracts: 'e.g., \'contracts/\'',
        contract_file_directory_path: 'Contract File(s) Directory Path (leave blank if none)',
        invalid_path_format: 'path must end with a forward slash /',
        upload_file: 'upload file',
        text_input: 'text input',
        runs_value_for_optimization: 'Runs value for optimization',
        constructor_arguments: 'Constructor Arguments',
        comma_seperated_values: 'comma seperated values e.g., Bob,123,0x12345...',
        no_trailing_commas: 'no trailing commas',
        paste_contract_code_here: 'copy & paste contract code here...',
        enter_contract_text: 'enter or paste contract text',
        verify_contract: 'Verify Contract',
        reset: 'Reset',
        gas_used: 'Gas used',
        transactions: 'Transactions',
        account: 'Account',
        contract: 'Contract',
        erc20_transfers: 'ERC20 Transfers',
        erc721_transfers: 'ERC721 Transfers',
        erc1155_transfers: 'ERC1155 Transfers',
        tokens: 'Tokens',
        created_at_trx: 'Created at Trx',
        by_address: 'By Address',
        number_used_once: 'Number used once (nonce)',
        native_account: 'Native Account',
        balance: 'Balance',
        view_source_prompt: 'This contract has been verified. You can view the source code & metadata in the \'contract\' tab',
        account_url: '{ domain }/account/{ account }',
        tlos_balance: '{ balance } NEP',
        couldnt_retreive_metadata_for_address: 'Could not retreive metadata for { address }: { message }',
        transaction_details: 'Transaction Details',
        transaction_not_found: 'Not found: { hash }',
        general: 'General',
        details: 'Details',
        logs: 'Logs',
        internal_txns: 'Internal Transactions',
        transaction_hash: 'Transaction Hash',
        click_to_change_date_format: 'Click to change date format',
        block_number: 'Block Number',
        from: 'From',
        to: 'To',
        date: 'Date',
        success: 'Success',
        failure: 'Failure',
        status: 'Status',
        balance_gwei: '{ amount } GWEI',
        balance_tlos: '{ amount } NEP',
        error_message: 'Error Message',
        contract_function: 'Contract Function',
        function_parameters: 'Function Parameters',
        deployed_contract: 'Deployed Contract',
        click_to_show_in_wei: 'Click to show in wei',
        gas_price_charged: 'Gas Price Charged',
        gas_fee: 'Gas Fee',
        gas_limit: 'Gas Limit',
        nonce: 'Nonce',
        input: 'Input',
        output: 'Output',
        value: 'Value',
    },
    components: {
        internal_txns: 'Internal Transactions',
        n_internal_txns: '{ amount } internal transactions',
        none: 'None',
        verify_prompt: 'This contract has not been verified.  Would you like to upload the contract(s) and metadata to verify source now?',
        verify_contract: 'Verify Contract',
        search_evm_address_failed: 'Search for EVM address linked to { accountName } native account failed. You can create one at wallet.telos.net',
        unknown_web3_login_type: 'Unknown web3 login type: { provider }',
        unknown_evm_login_provider: 'Unknown EVM login provider: { provider }',
        unknown_native_login_provider: 'Unknown native login provider: { provider }',
        connect_wallet: 'Connect Wallet',
        view_address: 'View Address',
        disconnect: 'Disconnect',
        disable_wallet_extensions: 'Disable extension wallets or set Brave Wallet as default in browser wallet settings to use Brave Wallet',
        enable_wallet_extensions: 'Enable MetaMask extension and set default to `prefer extensions` in browser wallet settings to use MetaMask wallet',
        evm_wallets: 'EVM Wallets',
        advanced: 'Advanced',
        continue_on_metamask: 'Continue on Metamask',
        text1_native_wallets: 'Native wallets for',
        text2_advanced_users: 'advanced users',
        text3_or_to_recover_assets: 'or to recover assets sent to a native-linked address',
        copy_to_clipboard: 'Copy { text } to clipboard',
        latest_block: 'Latest Block',
        tlos_price: 'NEP Price',
        gas_price: 'Gas Price',
        click_to_expand: 'Click to expand the function signature',
        search_evm_failed: 'Search for EVM address linked to { search_term } native account failed.',
        search_failed: 'Search failed, please enter a valid search term.',
        add_to_metamask: 'Add { symbol } to MetaMask',
        tx_hash: 'Tx Hash',
        block: 'Block',
        date: 'Date',
        method: 'Method',
        to_interacted_with: 'To / Interacted With',
        value_transfer: 'Value / Transfer',
        value: 'Value',
        token: 'Token',
        unknown_precision: 'Unknown Precision',
        click_to_change_format: 'Click to change format',
        func_exed_based_on_dec_data: 'Function executed based on decoded data',
        balance: 'Balance',
        error_fetching_balance: 'error fetching balance',
        launch_metamask_dialog_to_add: 'Launch MetaMask dialog to add { symbol }',
        search_hints: 'Transaction,Address,Block',
        no_provider_found: 'More than one provider is active, disable additional providers or current EVM wallet provider is not supported.',
        copied: 'Copied',
        copy_to_clipboard_failed: 'Copy to clipboard failed',
        gwei: 'Gwei',
        failed_to_parse_transaction: 'Failed to parse data for transaction, error was: { message }',
        executed_based_on_decoded_data: 'Function executed based on decoded input data. For unidentified function, method ID is displayed instead.',
        unsupported_token_type: 'Unsupported token type: { tokenType }',
        token_id: 'Id #{ tokenId }',
        status: 'Status',
        nonce: 'Nonce',
        from: 'From',
        to: 'To',
        transaction: {
            form_from: 'From : ',
            form_to: 'To : ',
            form_token: 'Token : ',
            consult_collection: 'Consult collection',
            consult_metadata: 'Consult metadata',
            consult_media: 'Consult media',
            show_total: 'Show total',
            show_wei: 'Show wei',
            value_uint256: 'Value (uint256) : ',
            tlos_transfer: 'NEP Transfer',
            unknown: 'Unknown',
            contract_deployment: 'Contract Deployment',
            no_internal_trxs_found: 'No internal transactions found',
            human_readable: 'Human Readable',
            no_logs_found: 'No logs found',
            verify_related_contract: 'Verify the related contract for each log to see its human readable version',
            failed_to_retrieve_contract: 'Failed to retrieve contract with address { address }',
        },
        inputs: {
            incorrect_address_array_length: 'There should be { size } addresses in the array',
            incorrect_booleans_array_length: 'There should be { size } booleans in the array',
            incorrect_bytes_array_length: 'There should be { size } bytes in the array',
            odd_number_of_bytes: 'There should be an even number of byte characters',
            incorrect_sigint_array_length: 'There should be { size } signed integers in the array',
            incorrect_strings_array_length: 'There should be { size } strings in the array',
            incorrect_unsigint_array_length: 'There should be { size } unsigned integers in the array',

            invalid_address_array_string: 'Entered value does not represent an array of addresses',
            invalid_booleans_array_string: 'Entered value does not represent an array of bool',
            invalid_bytes_array_string: 'Entered value does not represent an array of bytes',
            invalid_sigint_array_string: 'Entered value does not represent an array of signed integers',
            invalid_strings_array_string: 'Entered value does not represent an array of strings',
            invalid_unsigint_array_string: 'Entered value does not represent an array of unsigned integers',

            invalid_address_length: 'An address must be exactly 40 characters, not including "0x"',
            invalid_address_start: 'An address must begin with 0x',
            invalid_address_characters: 'Entry contains invalid characters',
            readonly: 'This field is readonly',
            required: 'This field is required',
            too_large: 'Maximum value for int{ size } is { max }',
            too_small: 'Minimum value for int{ size } is { max }',
            too_large_pow2: 'Maximum value for uint{ size } is 2^{ size } - 1',
            too_small_pow2: 'Minimum value for int{ size } is -(2^{ size }) + 1',
            too_large_unsigint: 'Maximum value for uint{ size } is 2^{ size } - 1',
            no_negative_unsigint: 'Value for uint{ size } must not be negative',
            invalid_signed_integer: 'Invalid signed integer',
            invalid_unsigint: 'Entry must be a valid unsigned integer',
            str_input_placeholder: '["some value", ... , "final value"]',
            str_input_hint: 'Double quotes in strings must be escaped (\\")',
            address_placeholder: 'Address beginning with 0x',
            address_label: '{ label } (address)',
            boolean_array_label: '{ label } (bool[{ size }])',
        },
        health: {
            status: 'Status',
            checked_at: 'Checked at',
            task: 'Task',
            message: 'Message',
            block_height: 'Block Height',
            latency: 'Latency',
            click_to_change_format: 'Click to change format',
        },
        contract_tab: {
            copy_abi_to_clipboard: 'Copy contract ABI JSON to clipboard',
            enter_amount: 'Select number of decimals and enter an amount, this will be entered for you into the function parameter as uint256',
            result: 'Result',
            view_transaction: 'View transaction',
            code: 'Code',
            read: 'Read',
            write: 'Write',
            query: 'Query',
            amount: 'Amount',
            value: 'Value',
            custom_decimals: 'Custom decimals',
            custom: 'Custom',
            unverified_contract_source: 'This contract source has not been verified.',
            click_here: 'Click here',
            upload_source_files: 'to upload source files and verify this contract. ' +
                'Alternatively, you can interact with the contract using an arbitrary ABI:',
            use_erc20_abi: 'Use ERC20 ABI',
            use_erc721_abi: 'Use ERC721 ABI',
            use_erc1155_abi: 'Use ERC1155 ABI',
            abi_from_json: 'ABI from JSON',
            paste_abi_json_here: 'Paste ABI JSON here',
            abi_json_preview: 'ABI JSON preview',
            provided_abi_invalid: 'Provided ABI is invalid',
            provided_json_invalid: 'Provided JSON is invalid',
            read_functions: 'Read functions',
            write_functions: 'Write functions',
            unverified_contract: 'Unverified contract',
            read_as_proxy: 'Read as Proxy',
            write_as_proxy: 'Write as Proxy',
            contract_is_proxy: 'This contract is an EIP-1967 Transparent Proxy for the contract',
            proxy_for_unverified_contract_part_1: 'The contract for which this is a proxy is not verified, so its ABI is not available. To interact with the implementation contract, visit the',
            proxy_for_unverified_contract_part_2: 'implementation contract page',
            no_abi_methods: 'No executable functions found in the contract ABI',
        },
        header: {
            sign_in: 'Sign in',
            sign_out: 'Sign out',
            liq_staking: 'Liquid Staking',
            goto_staking: 'Go to Staking',
            goto_health_monitor: 'go to Heath Monitor page',
            goto_mainnet: 'Go to Mainnet',
            goto_testnet: 'Go to Testnet',
            health_monitor: 'Health Monitor',
            health_status: 'Health Status',
            advanced: 'Advanced',
            light_mode: 'Light Mode',
            dark_mode: 'Dark Mode',
            address_not_found: 'Search for EVM address linked to { account } native account failed.',
            search_failed: 'Search failed, please enter a valid search term.',
            goto_address_details: 'Go to address details',
            copy_address: 'Copy address',
            address_copied: 'Address copied to clipboard',
            search_placeholder: 'Address, Tx, Block',
            select_language: 'Select Language',
            open_language_switcher: 'open language switcher',
        },
    },
    evm_wallet: {
        send_icon_alt: 'Send icon',
        receive_icon_alt: 'Receive icon',
        buy_icon_alt: 'Buy more tokens icon',
        token_logo_alt: 'Token logo',
        send: 'Send',
        receive: 'Receive',
        scan_qr: 'Scan the QR Code to get your account',
        buy: 'Buy',
        unwrap: 'Unwrap',
        wrap: 'Wrap',
        stake: 'Stake',
        unstake: 'Unstake',
        copy: 'Copy',
        link_to_send_aria: 'Link to Send page',
        link_to_receive_aria: 'Link to Receive page',
        link_to_buy_aria: 'External link to buy tokens',
        balance_row_actions_aria: 'Balance row actions',
        no_fiat_value: 'No reliable fiat value found',
        receiving_account: 'Receiving Account',
        account_required: 'Account is required',
        token: 'Token',
        cancel: 'Cancel',
        estimated_fees: 'Estimated Fees',
        amount_available: '{amount} Available',
        amount_required: 'Amount is required',
        view_contract: 'View Contract',
        invalid_form: 'There is at least one invalid field.',
        general_error: 'There was an error processing your request',
        invalid_amount_precision: 'You can only enter {precision} decimal places',
        sent: 'Sent',
        received: 'Received',
        swapped: 'Swapped',
        switch: 'Switch',
        failed_contract_interaction: 'Failed contract interaction',
        contract_interaction: 'Contract interaction',
        contract_creation: 'Contract creation',
        aria_link_to_address: 'Link to block explorer address page',
        aria_link_to_transaction: 'Link to block explorer transaction page',
        click_to_fill_max: 'Click to fill max amount',
        amount_exceeds_available_balance: 'Balance too low',
        incorrect_network: 'Incorrect network detected! Switch to {networkName} to complete transaction',
        viewing_n_transactions: 'Viewing {rowsPerPage} of {totalRows} transactions',
        no_transactions_found: 'No transactions found',
        add_to_metamask: 'Add to MetaMask',
        rejected_metamask_prompt: 'The MetaMask prompt was rejected',
        error_adding_token_to_metamask: 'Error adding token to MetaMask',
        inventory: 'Collectibles',
    },
    global: {
        language: 'Language',
        cancel: 'Cancel',
        ok: 'Ok',
        dismiss: 'Dismiss',
        internal_error: 'Internal Error',
    },
    layouts: {
        health_status: 'Health Status',
        stake_telos: 'Stake NEP',
        teloscan_mainnet: 'Teloscan Mainnet',
        teloscan_testnet: 'Teloscan Testnet',
    },
    notification:{
        success_title_trx: 'Success',
        success_title_copied: 'Copied',
        success_message_trx: 'Your transaction has been processed. For detailed information, click the link below.',
        success_message_revoking: 'Revoking <b>{symbol}</b> allowance for <b>{address}</b> was successful.',
        success_message_copied: 'Your account name has been copied to the clipboard.',
        success_see_trx_label: 'See Transaction',
        dismiss_label: 'Dismiss',
        error_title: 'ooops',
        error_title_disconnect: 'No Internet connection',
        error_message_disconnect: 'We\'re sorry, it looks like you\'re not connected to the internet. Please check your network connection and try again.',
        error_see_details_label: 'See Details',
        error_details_title: 'Error Details',
        neutral_message_sending: 'Sending <b>{quantity}</b> to <b>{address}</b>',
        neutral_message_staking: 'Staking <b>{quantity} {symbol}</b>',
        neutral_message_unstaking: 'Unstaking <b>{quantity} {symbol}</b>',
        neutral_message_revoking: 'Revoking  <b>{symbol}</b> allowance for <b>{address}</b>',
        neutral_message_wrapping: 'Wrapping <b>{quantity} {symbol}</b>',
        neutral_message_unwrapping: 'Unwrapping <b>{quantity} {symbol}</b>',
        neutral_message_withdrawing: 'Withdrawing <b>{quantity} {symbol}</b>',
        dont_show_message_again: 'Don\'t show me this message again',
        error_message_sending: 'An error occurred while sending <b>{quantity}</b> to <b>{address}</b>',
        error_message_staking: 'An error occurred while staking <b>{quantity} {symbol}</b>',
        error_message_unstaking: 'An error occurred while unstaking <b>{quantity} {symbol}</b>',
        error_message_revoking: 'An error occurred while revoking <b>{symbol}</b> allowance for <b>{address}</b>',
        error_message_wrapping: 'An error occurred while wrapping <b>{quantity} {symbol}</b>',
        error_message_unwrapping: 'An error occurred while unwrapping <b>{quantity} {symbol}</b>',
        error_message_withdrawing: 'An error occurred while withdrawing <b>{quantity} {symbol}</b>',
        error_message_custom_call: 'An error occurred while calling <b>{name}</b> with <b>{params} parameters</b>',
        error_message_custom_call_send: 'An error occurred while calling <b>{name}</b> with <b>{params} parameters</b>, sending <b>{quantity} {symbol}</b>',
        neutral_message_custom_call: 'calling <b>{name}</b> with <b>{params} parameters</b>',
        neutral_message_custom_call_send: 'calling <b>{name}</b> with <b>{params} parameters</b>, sending <b>{quantity} {symbol}</b></b>',
    },
    antelope: {
        contracts: {
            invalid_contract: 'Contract or contract ABI missing',
            contract_data_required: 'Contract data missing',
        },
        evm: {
            error_support_provider_request: 'Provider does not support request method',
            error_login: 'Error in login proccess',
            error_add_chain_rejected: 'User has rejected the request to add the chain',
            error_connect_rejected: 'User has rejected the request to connect to the chain',
            error_add_chain: 'Error in adding chain',
            error_switch_chain_rejected: 'User has rejected the request to switch the chain',
            error_switch_chain: 'Error in switching chain',
            error_no_provider: 'No provider found',
            error_getting_function_interface: 'Error trying to find event signature for function {prefix}',
            error_getting_event_interface: 'Error trying to find event signature for event {hex}',
            error_invalid_address: 'Invalid address',
            error_getting_contract_creation: 'Error trying to get contract creation info',
            error_no_signer: 'No signer found',
            error_send_transaction: 'An unknown error occurred when sending the transaction',
            error_transfer_failed: 'An unknown error occurred when transferring tokens',
            error_call_exception: 'An error occurred while calling the smart contract function',
            error_insufficient_funds: 'You don\'t have enough funds to complete this transaction',
            error_missing_new: 'A new operator was missing when deploying the smart contract',
            error_nonce_expired: 'The nonce used for this transaction is too low',
            error_numeric_fault: 'A numeric operation failed',
            error_replacement_underpriced: 'A new transaction replacing an existing one does not have enough gas price',
            error_transaction_replaced: 'This transaction was replaced by another transaction',
            error_unpredictable_gas_limit: 'The gas limit for this transaction couldn\'t be estimated',
            error_user_rejected: 'You rejected the transaction',
            error_transaction_canceled: 'You canceled the action',
            error_wrap_not_supported_on_native: 'Wrap is not supported on native chain',
            error_unwrap_not_supported_on_native: 'Unwrap is not supported on native chain',
            error_wrap_failed: 'An unknown error occurred when wrapping tokens',
            error_unwrap_failed: 'An unknown error occurred when unwrapping tokens',
            error_stake_failed: 'An unknown error occurred when staking tokens',
            error_unstakes_failed: 'An unknown error occurred when unstaking tokens',
            error_withdraw_failed: 'An unknown error occurred when withdrawing tokens',
            error_fetching_token_price: 'An unknown error occurred when fetching token price data',
        },
        history: {
            error_fetching_transactions: 'Unexpected error fetching transactions. Please refresh the page to try again.',
            error_fetching_nft_transfers: 'Unexpected error fetching NFT transfers. Please refresh the page to try again.',
        },
        chain: {
            error_update_data: 'Error in updating data',
            error_apy: 'Error in getting APY',
            error_invalid_network: 'Invalid network',
            error_no_default_authenticator: 'No default authenticator found',
        },
        account: {
            error_login_native: 'An error has occurred trying to login to the native chain',
            error_login_evm: 'An error has occurred trying to login to the EVM chain',
            error_auto_login: 'An error has occurred trying to auto login the user',
        },
        utils: {
            error_parsing_transaction: 'Failed to parse transaction data',
            error_contract_instance: 'Failed to create contract instance',
            error_parsing_log_event: 'Failed to parse log event',
        },
        balances: {
            error_at_transfer_tokens: 'An error has occurred trying to transfer tokens',
            error_token_contract_not_found: 'Token contract not found for address {address}',
        },
        rex: {
            error_contract_not_found: 'Contract not found for address {address}',
        },
        wallets: {
            error_system_token_transfer_config: 'Error getting Wagmi system token transfer config',
            error_token_transfer_config: 'Error getting Wagmi token transfer config',
            error_oreid_no_chain_account: 'The app {appName} does not have a chain account for the chain {networkName}',
            network_switch_success: 'Network switched successfully',
        },
        wrap: {
            error_getting_wrapped_contract: 'An error occurred while getting the wrapped system token contract',
            error_wrap: 'An unknown error occurred while wrapping system token',
        },
        words: {
            days: 'days',
            hours: 'hours',
            minutes: 'minutes',
            seconds: 'seconds',
        },
    },
    temporal: {
        telos_cloud_discontinued_title: 'Important',
        telos_cloud_discontinued_message_title: 'Attention Users: Telos Cloud Wallet account option will be discontinued.',
        telos_cloud_discontinued_message_body:'The Telos Cloud Wallet (ORE ID via Google) account option to connect and sign transactions will be discontinued after December 31st. If you use the Telos Cloud Wallet to access your account, please transfer your assets to another wallet before this deadline. <strong> This change does <i>not</i> impact users accessing their accounts via Metamask, WalletConnect, Anchor, or other sign-in methods.</strong>',
    },
};
